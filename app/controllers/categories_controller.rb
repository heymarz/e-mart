class CategoriesController < ApplicationController
  def index
    render json: Category.all, only: [:id, :categoryName]
  end

end
