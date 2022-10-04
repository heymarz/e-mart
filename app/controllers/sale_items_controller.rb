require 'pry'
class SaleItemsController < ApplicationController
  def index
    user = User.find_by(id: session[:user_id])
    @sale_items = user.sale_items
    render json: @sale_items
  end
  
  # def create
  #   @sale_item = SaleItem.create(sale_item_params)
  #   render json: @sale_item, status: :created
  # end

  def update
    binding.pry
    @sale_item = SaleItem.find_by(params[:id])
    if @sale_item
      @sale_item.update(sale_item_params)
        render json: @sale_item, status: :accepted
      else
        render json: :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @sale_item = SaleItem.find_by(id: params[:id])
    @sale_item.destroy
    head :no_content
  end

  def sale_item_params
    params.require(:sale_item).permit(:item_id, :seller_id, :item)
  end
end
