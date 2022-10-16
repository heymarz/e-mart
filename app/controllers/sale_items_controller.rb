class SaleItemsController < ApplicationController
  def index
    user = User.find_by(id: session[:user_id])
    @sale_items = user.sale_items
    render json: @sale_items
  end

  def sale_item_params
    params.require(:sale_item).permit(:item_id, :seller_id)
  end
end
