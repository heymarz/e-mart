class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.references :buyer
      t.integer "for_sale_item_id"
    end
    add_foreign_key "favorites", "users", column: "buyer_id"
  end
end
