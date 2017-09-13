module Api
  module V1
    module Auth
      class UsersController < ApplicationController
        before_action :set_user, only: %i[show update destroy]
        # skip authorization for create user
        skip_before_action :authorize_request, only: :create

        # GET /users
        def index
          @users = User.all
          json_response(@users)
        end

        # POST /users... aka POST /api/auth/signup
        def create
          user = User.create!(user_params)
          auth_token = AuthenticateUser.new(user.email, user.password).call
          response = { message: Message.account_created, auth_token: auth_token }
          json_response(response, :created)
        end

        # GET /users/:id
        def show
          json_response(@user)
        end

        # PUT /users/:id
        def update
          @user.update(user_params)
          head :no_content
        end

        # DELETE /users/:id
        def destroy
          @user.destroy
          head :no_content
        end

        private

        def user_params
          # whitelist params
          params.permit(:fname, :lname, :email, :password, :password_confirmation)
        end

        def set_user
          @user = User.find(params[:id])
        end
      end
    end
  end
end