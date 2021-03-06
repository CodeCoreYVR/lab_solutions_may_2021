Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # get("/",{to:"welcome#index"})
  root to:'welcome#index'
  get("/about",{to:"about#index"})
  get("/contact",{to:"contact#index"})
  post("/contact_submit",{to:"contact#create",as: :contact_submit})
  get("/new",{to:"bills#new"})
  post("/bill", {to: 'bills#calculate', as: :bill})

  # Labs for rails CRUD
  # get("/products",to:"products#index")
  # get("/products/new",to:"products#new",as: :new_product)
  # post("/products",to:"products#create")

  # get("/products/:id",to:"products#show",as: :product)
  # delete("/products/:id",to:"products#destroy")
  
  # get("/products/:id/edit",to:"products#edit",as: :edit_product)
  # patch("/products/:id",to:"products#update")

  # Labs for rails One to Many
  resources :products do
    resources :reviews do
      resources :likes, shallow: true, only: [:create, :destroy]
      resources :votes, shallow: true, only: [:create, :destroy]
    end
    resources :favourites, shallow: true, only: [:create, :destroy]
  end

  # Labs for rails Authentication
  resources :users, only: [:new, :create]

  resource :session, only: [:new, :destroy, :create]

  get("/dashboard",{to:"users#dashboard"})
  resources :tags,only: [:index]
  resources :news_articles

  # labs for rails api
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :products
      resource :session, only: [:create, :destroy]
      resources :users do
        get :current, on: :collection
      end
    end
  end
end
