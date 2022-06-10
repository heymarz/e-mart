class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create]

  def create
    user = User.create(user_params)
      session[:user_id] = user.id
      if user.valid?
        render json: user, status: :created
      else
        render json: { error: user.errors.full_messages.join(", ") }, status: :unprocessable_entity
      end
  end
  
  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: {error: "Not authorized"}, status: :unauthorize
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
