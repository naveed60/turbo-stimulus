Rails.application.routes.draw do
  resources :students
  resources :movies
  resources :transactions
  resources :listings
  resources :reviews
  resources :people
  resources :admins
  resources :categories
  resources :employees
  devise_for :users
  root "home#index"

  resources :articles do
    resources :comments
  end
end
