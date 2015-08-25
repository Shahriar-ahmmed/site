Site::Application.routes.draw do
  get "welcome/index"
  post "welcome/send_mail", to: 'welcome#send_mail'

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => 'welcome#index'
  root :to => 'welcome#index'



end
