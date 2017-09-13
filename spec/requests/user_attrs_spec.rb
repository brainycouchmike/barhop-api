require 'rails_helper'

RSpec.describe 'UserAttrs API', type: :request do
  # add user_attrs owner
  let(:user) { create(:user) }
  let!(:user_attrs) { create_list(:user_attr, 10, user_id: user.id) }
  let(:user_attr_id) { user_attrs.first.id }
  # authorize request
  let(:headers) { valid_headers }

  describe 'GET /api/user_attrs' do
    # update request with headers
    before { get '/api/user_attrs', params: {}, headers: headers }

    it 'returns user_attrs' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /api/user_attrs/:id' do
    before { get "/api/user_attrs/#{user_attr_id}", params: {}, headers: headers }

    context 'when the record exists' do
      it 'returns the user_attr' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(user_attr_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:user_attr_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find UserAttr/)
      end
    end
  end

  describe 'POST /api/user_attrs' do
    let(:valid_attributes) do
      # send json payload
      { key: 'Learn Elm', value: 'I like to do it.' }.to_json
    end

    context 'when request is valid' do
      before { post '/api/user_attrs', params: valid_attributes, headers: headers }

      it 'creates a user_attr' do
        expect(json['key']).to eq('Learn Elm')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when request is invalid' do
      let(:valid_attributes) { { title: nil }.to_json }
      before { post '/api/user_attrs', params: valid_attributes, headers: headers }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body)
            .to match(/Validation failed: Key can't be blank/)
      end
    end
  end

  describe 'PUT /api/user_attrs/:id' do
    let(:valid_attributes) { { key: 'Shopping' }.to_json }

    context 'when the record exists' do
      before { put "/api/user_attrs/#{user_attr_id}", params: valid_attributes, headers: headers }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

  describe 'DELETE /api/user_attrs/:id' do
    before { delete "/api/user_attrs/#{user_attr_id}", params: {}, headers: headers }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end