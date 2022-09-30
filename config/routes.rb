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
  
  get '/saleItem', to: 'sale_items#index'
  post '/saleItem', to: 'sale_items#create'
  delete '/saleItem/:id', to: 'sale_items#destroy'

  root "welcome#index"
end
