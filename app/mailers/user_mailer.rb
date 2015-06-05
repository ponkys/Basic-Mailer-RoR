class UserMailer < ApplicationMailer
	default from: 'andreslopezferro@gmail.com'
	def email_verification (username, email)
		@name = username
		@url = "http://www.google.com"
		mail(to: email, subject: "Bienvenido.")
	end
end
