Rails.application.routes.draw do
  get '/me', to: 'users#show'

  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#delete'


  resources :for_sale_items
end
