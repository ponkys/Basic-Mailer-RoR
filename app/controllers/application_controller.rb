class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
  	render "/index"
  end

  def email
  	UserMailer.email_verification(params[:name], params[:email]).deliver_now
  	puts "Se envio el correo."
  	redirect_to "/"
  end

end
