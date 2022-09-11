require 'pry'
class FavoritesController < ApplicationController
  def create
    @favorite = Favorite.create(favorite_params)
    buyer = Favorite.find_by_buyer_id(params[:buyer_id])
    if @favorite.buyer_id === buyer
      binding.pry
      redirect_to action: :destroy
    else
      @favorite.save
      render json: @favorite, status: :created
  end
end

  def destroy
    @favorite = Favorite.find_by(id: params[:id])
    @favorite.destroy
    head :no_content
  end

  def show
    user = User.find_by(id: session[:user_id])
    render json: user.wishListItems
  end

  private
  def favorite_params
    params.require(:favorite).permit(:for_sale_item_id, :buyer_id)
  end
end
