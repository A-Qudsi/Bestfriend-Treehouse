Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    
    resources :users, only: [:create] do 
      resources :reservations, only: [:index]
    end

    resource :session, only: [ :create, :destroy]

    resources :spots, only: [:index, :show, :create, :update, :destroy] 
    resources :reservations, only: [:show, :create, :update, :destroy]
    resources :reviews, only: [:index, :create, :update, :destroy]
  end
end
