Rails.application.routes.draw do
  get '/me', to: 'users#show'

  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/categories', to: 'categories#index'
  get '/images', to: 'images#index'

  root "for_sale_item#index"
  resources :for_sale_items
end
