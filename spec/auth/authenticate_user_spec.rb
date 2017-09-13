require 'rails_helper'

RSpec.describe AuthenticateUser do
  let(:user) { create(:user) }
  # valid request subject
  subject(:valid_auth_obj) { described_class.new(user.email, user.password) }
  # invalid request subject
  subject(:invalid_auth_obj) { described_class.new('foo', 'bar') }

  # Test suite for AuthenticateUser#call
  describe '#call' do
    # return token when valid request
    context 'when valid credentials' do
      it 'returns an auth token' do
        token = valid_auth_obj.call
        expect(token).not_to be_nil
      end
    end

    # raise Authentication Error when invalid request
    context 'when invalid credentials' do
      it 'raises an authentication error' do
        expect { invalid_auth_obj.call }
          .to raise_error(
            ExceptionHandler::AuthenticationError,
            /Invalid credentials/
          )
      end
    end
  end


  # Test suite for AuthenticateUser#verify
  describe '#verify' do
    context 'when valid token' do
      let(:token) { valid_auth_obj.call }
      subject(:valid_auth_token) { described_class.new token }
      it 'returns the valid auth token' do
        result = valid_auth_token.validate
        expect(result).to_not be_nil
        # force a refresh of the token, so should be different
        expect(result).to_not eq(token)
      end
    end

    context 'when invalid token' do
      let(:token) { invalid_auth_obj.call }
      subject(:invalid_auth_token) { described_class.new token }
      it 'returns the valid auth token' do
        expect { invalid_auth_token.validate }
          .to raise_error(
            ExceptionHandler::AuthenticationError,
            /Invalid credentials/
          )
      end
    end
  end
end