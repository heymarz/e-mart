class UserMailer < ApplicationMailer
  default from: 'marlena345@gmail.com'
  prepend_view_path "custom/path/to/mailer/view"

  def welcome_email
    @user = params[:user]
    @url  = 'http://localhost:3000/signup'
    mail(
      to: @user.email, 
      subject: 'Welcome to My Awesome Site',
      template_path: 'welcome_email',
      template_name: 'another'
    )
  end
end
