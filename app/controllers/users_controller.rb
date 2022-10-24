class UsersController < ApplicationController

  def create
    @user = User.new(user_params)
      session[:user_id] = @user.id
      if @user.save
        UserMailer.with(user:@user).welcome_email.deliver_now
        render json: @user, status: :created 
      else
        render json: { error: @user.errors.full_messages.join(", ") }, status: :unprocessable_entity
      end
      
  end
  
  def show
    user = User.find_by(id: session[:user_id])
      render json: user
  end

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
