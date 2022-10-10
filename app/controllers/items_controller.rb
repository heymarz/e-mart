class ItemsController < ApplicationController
  before_action :set_item, only: %i[ show edit update destroy ]

  # GET /items or /items.json
  def index
    @items = Item.all
    render json: @items
  end

  # GET /items/1 or /items/1.json
  def show
    render json: @item
  end

  # GET /items/1/edit
  def edit
  end

  # POST /items or /items.json
  def create
    @item = Item.create(item_params)
    if @item.save
      SaleItem.create(seller_id: session[:user_id], item_id: @item.id)
      render json: @item, status: :created
    else  
    render json: { errors: @item.errors.full_messages.join(", ") }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /items/1 or /items/1.json
  def update
    if @item
      @item.update(item_params)
        render json: @item, status: :accepted
      else
        render json: :edit, status: :unprocessable_entity
    end
  end

  # DELETE /items/1 or /items/1.json
  def destroy
    @item.destroy
    head :no_content
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_item
    @item = Item.find_by(id: params[:id])
  end
  
  # Only allow a list of trusted parameters through.
  def item_params
    params.require(:item).permit(:id, :title, :category_id, :description, :price, :images)
  end

end
