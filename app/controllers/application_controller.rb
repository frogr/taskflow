class ApplicationController < ActionController::Base
  # Disable CSRF for API endpoints
  protect_from_forgery with: :null_session
end
