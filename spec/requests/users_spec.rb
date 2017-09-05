require 'rails_helper'

RSpec.describe 'User API', type: :request do
  # initialize test data
  let!(:users) { create_list(:user, 10) }
  let(:user_id) { users.first.id }

  # Test for GET /users
  describe 'GET /users' do
    # make request
    before { get '/users' }
    # check response body
    it 'returns users' do
      # json custom helper
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end
    # check response code
    it 'return status code 200' do
      expect(response).to have_http_status(200)
    end
  end # GET /users

  # Test for GET /users/:id
  describe 'GET /users/:id' do
    # make request
    before { get "/users/#{user_id}" }
    # Found...
    context 'when the record exists' do
      # test response body
      it 'returns the user' do
        expect(json).to_not be_empty
        expect(json['id']).to eq(user_id)
      end
      # test response status
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end # Found
    # Not Found
    context 'when the record does not exist' do
      # set erroneous data
      let(:user_id) { 100 }
      # test response status
      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end
      # test response body
      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find User/)
      end
    end # Not Found
  end # GET /users/:id

  # Test for POST /users
  describe 'POST /users' do
    # valid data
    let(:valid_user) { { fname: 'Testie', lname: 'Testerson', email: 'testie.t@gmail.com' } }
    # Valid request
    context 'when the request is valid' do
      # Make valid request
      before { post '/users', params: valid_user }
      # check response body
      it 'creates a user and log at' + "#{Rails.root}/log/#{Rails.env}.log" do
        # Rails.logger.debug json.to_yaml
        expect(json['fname']).to eq(valid_user[:fname])
        expect(json['lname']).to eq(valid_user[:lname])
        expect(json['email']).to eq(valid_user[:email])
      end
      # check response status
      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end # Valid
    # Not Valid
    context 'when the request is not valid' do
      # make invalid request
      before { post '/users', params: { fname: 'Faily', lname: 'Failzor' } }
      # check response status
      it 'return status code 422' do
        expect(response).to have_http_status(422)
      end
      # check response body
      it 'returns failure message' do
        expect(response.body)
          .to match(/Validation failed: Email can't be blank/)
      end
    end # Not Valid
  end # POST /users

  # Test for PUT /users/:id
  describe 'PUT /users/:id' do
    # set valid request data
    let(:valid_update) { { fname: 'Teston' } }
    # valid record
    context 'when record exists' do
      # make valid request
      before { put "/users/#{user_id}", params: valid_update }
      # check response body (to be empty)
      it 'updates the record' do
        expect(response.body).to be_empty
      end
      # check response code
      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end # valid
    # not valid user
    context 'when record does not exist' do
      before { put '/users/-1', params: valid_update }
      # check response code
      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end
      # check response body
      it 'return not found message' do
        expect(response.body).to match(/Couldn't find User/)
      end
    end # not valid user
  end # PUT /users/:id

  # Test for DELETE /users/:id
  describe 'DELETE /users/:id' do
    # make request
    before { delete "/users/#{user_id}" }
    # check response code
    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
    # check response body
    it 'returns empty response body' do
      expect(response.body).to be_empty
    end
  end # DELETE /users/:id
end
