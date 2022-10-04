class CategoriesController < ApplicationController
  def index
    render json: Category.all, only: [:id, :category_name]
  end

end
