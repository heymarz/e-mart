class FavoritesController < ApplicationController

  def index
    user = User.find_by(id: session[:user_id])
    @favorites = user.favorites
    render json: @favorites.to_json( :include => :for_sale_item) 
  end
  
  def create
    @favorite = Favorite.create(favorite_params)
    render json: @favorite, status: :created
  end


  def destroy
    @favorite = Favorite.find_by(id: params[:id])
    @favorite.destroy
    head :no_content
  end

  private
  def favorite_params
    params.require(:favorite).permit(:for_sale_item_id, :buyer_id)
  end
end
