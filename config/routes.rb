Rails.application.routes.draw do
  get '/me', to: 'users#show'

  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  get '/categories', to: 'categories#index'
  
  resources :items, except: [:new]
  
  get '/favorites', to: 'favorites#index'
  post '/favorites', to: 'favorites#create'
  delete '/favorites/:id', to: 'favorites#destroy'
  
  get '/saleItems', to: 'sale_items#index'
  post '/saleItems', to: 'sale_items#create'
  delete '/saleItems/:id', to: 'sale_items#destroy'

  root "welcome#index"
end
