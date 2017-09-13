module Api
  module V1
    # UserAttrsController
    class UserAttrsController < ApplicationController
      before_action :set_user_attr, only: %i[show update destroy]

      # GET /user_attrs
      def index
        # get current user user_attrs
        @user_attrs = current_user.user_attrs
        json_response(@user_attrs)
      end

      # GET /user_attrs/:id
      def show
        json_response(@user_attr)
      end

      # POST /user_attrs
      def create
        # create user_attrs belonging to current user
        @user_attr = current_user.user_attrs.create!(user_attr_params)
        json_response(@user_attr, :created)
      end

      # PUT /user_attrs/:id
      def update
        @user_attr.update(user_attr_params)
        head :no_content
      end

      # DELETE /user_attrs/:id
      def destroy
        @user_attr.destroy
        head :no_content
      end

      private

      def user_attr_params
        params.permit(:value, :key)
      end

      def set_user_attr
        @user_attr = UserAttr.find(params[:id])
      end
    end
  end
end