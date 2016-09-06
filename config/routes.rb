Rails.application.routes.draw do
  devise_for :users

  root to: 'pages#home'

  get 'dashboard' => 'pages#dashboard'
  get 'new' => 'pages#after_fill'

  resources :working_places
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
