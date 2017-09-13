# app/controllers/authentication_controller.rb
module Api
  module V1
    module Auth
      # Class AuthenticationController
      class AuthenticationController < ApplicationController
        # don't authenticate authenticating (doesn't make sense)
        skip_before_action :authorize_request # , only: :authenticate

        # return auth token once user is authenticated
        def authenticate
          auth_token =
            AuthenticateUser.new(auth_params[:email], auth_params[:password]).call
          json_response(auth_token: auth_token)
        end

        # POST '/api/auth/verify'
        def refresh
          auth_token = AuthenticateUser.new(params[:auth_token]).validate
          # return the request auth_token or allow to error above
          json_response(auth_token: auth_token)
        end

        private

        def auth_params
          params.permit(:email, :password, :auth_token)
        end
      end
    end
  end
end
