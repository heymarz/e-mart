require "pry"
class ForSaleItemsController < ApplicationController

  before_action :set_for_sale_item, only: %i[ show edit update destroy ]

  # GET /for_sale_items or /for_sale_items.json
  def index
    @for_sale_items = ForSaleItem.all
    render json: @for_sale_items
  end

  # GET /for_sale_items/1 or /for_sale_items/1.json
  def show
    render json: @for_sale_item
  end

  # GET /for_sale_items/new
  def new
    @for_sale_item = ForSaleItem.new
    render json: @for_sale_item
  end

  # GET /for_sale_items/1/edit
  def edit
  end

  # POST /for_sale_items or /for_sale_items.json
  def create
    @for_sale_item = ForSaleItem.create(for_sale_item_params)
    binding.pry
    return render json: @for_sale_item, status: :created
  end

  # PATCH/PUT /for_sale_items/1 or /for_sale_items/1.json
  def update
    respond_to do |format|
      if @for_sale_item.update(for_sale_item_params)
        format.html { redirect_to for_sale_item_url(@for_sale_item), notice: "For sale item was successfully updated." }
        format.json { render :show, status: :ok, location: @for_sale_item }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @for_sale_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /for_sale_items/1 or /for_sale_items/1.json
  def destroy
    @for_sale_item.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_for_sale_item
      @for_sale_item = ForSaleItem.find_by(id: params[:id])
    end

    # Only allow a list of trusted parameters through.
    def for_sale_item_params
      params.require(:for_sale_item).permit(:id, :itemTitle, :category_id, :itemDescription, :itemPrice, :user_id, :images_id)
    end

end
