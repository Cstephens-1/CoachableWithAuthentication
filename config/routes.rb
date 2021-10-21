Rails.application.routes.draw do

  resources :exercise_lists
  resources :class_workouts
  resources :class_students
  resources :user_workouts
  resources :workout_plans
  resources :gym_classes
  resources :exercises
  resources :students
  resources :users
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
