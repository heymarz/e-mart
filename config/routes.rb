Rails.application.routes.draw do
  get '/me', to: 'users#show'

  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/categories', to: 'categories#index'
  get '/images', to: 'images#index'

  root "welcome#index"
  resources :for_sale_items, except: [:new]

  post '/favorites/for_sale_item/:forSaleItemId', to: 'favorites#create'
  delete '/favorites/for_sale_item/:forSaleItemId', to: 'favorites#destroy'
end
