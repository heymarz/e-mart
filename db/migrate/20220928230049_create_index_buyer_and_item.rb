class CreateIndexBuyerAndItem < ActiveRecord::Migration[7.0]
  def change
    add_index(:favorites, [:buyer_id, :item_id], unique: true)

    
  end
end
