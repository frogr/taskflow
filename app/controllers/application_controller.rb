class ApplicationController < ActionController::Base
  include Authentication
  # Disable CSRF for API endpoints
  protect_from_forgery with: :null_session
end
