Rails.application.routes.draw do
  root 'tips#index'

  get 'pages/index'

  match 'pages/create' => 'pages#create', :as => :pages_create, via: [:get,:post]
  match 'tips/get_all_tips' => 'tips#get_all_tips', :as => :tips_get_all_tips, via: [:get,:post]
  match 'tips/get_all_categories' => 'tips#get_all_categories', :as => :tips_get_all_categories, via: [:get,:post]

end
