Rails.application.routes.draw do
  mount MaintenanceTasks::Engine => "/maintenance_tasks"
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  root "dashboard#show"
  get "/dashboard" => "dashboard#show"

  get "/plaid/create_link_token" => "plaid#create_link_token"
  post "/plaid/exchange_public_token" => "plaid#exchange_public_token"

  resources :transaction, only: [:index]

end
