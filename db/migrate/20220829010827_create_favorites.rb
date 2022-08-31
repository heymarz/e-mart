class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.integer "user_id", null: false
      t.integer "for_sale_item_id", null: false

      t.index ["user_id"], name: "index_favorites_on_user_id"
      t.index ["for_sale_item_id"], name: "index_favorites_on_for_sale_item_id"      
      t.index ["user_id", "for_sale_item_id"], name: "index_favorites_on_user_id_and_for_sale_item_id", unique: true
    end
  end
end
