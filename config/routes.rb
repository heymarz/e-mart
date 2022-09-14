Rails.application.routes.draw do
  get '/me', to: 'users#show'

  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  get '/categories', to: 'categories#index'
  get '/images', to: 'images#index'
  
  resources :for_sale_items, except: [:new]
  
  get '/favorites', to: 'favorites#index'
  post '/favorites', to: 'favorites#create'
  delete '/favorites/:id', to: 'favorites#destroy'
  
  root "welcome#index"
end
