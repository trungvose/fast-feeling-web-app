Rails.application.routes.draw do
  root 'pages#cat1' # Set cat1 as the default home page
  
  get 'playlists/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
  get "playlists" => "playlists#index"
  get 'playlists/:id', to: 'playlists#detail', as: 'playlist_detail'

  # Cat
  get 'cat1', to: 'pages#cat1'
  get 'cat2', to: 'pages#cat2'
  get 'emoji1', to: 'pages#emoji1'
  get 'emoji2', to: 'pages#emoji2'
  
  # Defines the root path route ("/")
  # root "posts#index"
end
