Rails.application.routes.draw do
  resources :categories
  resources :employees
  devise_for :users
  root "home#index"

  resources :articles do
    resources :comments
  end
end
