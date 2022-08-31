require 'pry'
class FavoritesController < ApplicationController
  def create
    binding.pry
    @favorite = current_user.favorite.new(favorite_params)
    render json: @favorite, status: :success
  end

  def destroy
    @favorite = Favorite.find_by(id: params[:id])
    @favorite.destroy
    head :no_content
  end

  private
  def favorite_params
    params.require(:favorites).permit(:for_sale_item_id)
  end
end
