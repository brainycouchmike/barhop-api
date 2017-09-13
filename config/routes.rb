Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    scope module: :v1, constraints: ApiVersion.new('v1', true) do
      resources :user_attrs
      namespace :auth do
        post 'login', to: 'authentication#authenticate'
        # set POST /api/{v1/}auth/verify
        # refresh the user token or error if invalid
        post 'verify', to: 'authentication#refresh'
        post 'signup', to: 'users#create'
      end
    end
  end
  match 'login', to: redirect('/#/login'), via: :all
end
