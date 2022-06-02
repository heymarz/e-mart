class ForSaleItemsController < ApplicationController
  before_action :set_for_sale_item, only: %i[ show edit update destroy ]

  # GET /for_sale_items or /for_sale_items.json
  def index
    @for_sale_items = ForSaleItem.all
  end

  # GET /for_sale_items/1 or /for_sale_items/1.json
  def show
  end

  # GET /for_sale_items/new
  def new
    @for_sale_item = ForSaleItem.new
  end

  # GET /for_sale_items/1/edit
  def edit
  end

  # POST /for_sale_items or /for_sale_items.json
  def create
    @for_sale_item = ForSaleItem.new(for_sale_item_params)

    respond_to do |format|
      if @for_sale_item.save
        format.html { redirect_to for_sale_item_url(@for_sale_item), notice: "For sale item was successfully created." }
        format.json { render :show, status: :created, location: @for_sale_item }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @for_sale_item.errors, status: :unprocessable_entity }
      end
    end
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

    respond_to do |format|
      format.html { redirect_to for_sale_items_url, notice: "For sale item was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_for_sale_item
      @for_sale_item = ForSaleItem.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def for_sale_item_params
      params.require(:for_sale_item).permit(:img, :title, :category_id, :description, :location, :price, :user_id)
    end
end
