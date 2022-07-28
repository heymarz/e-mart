class CreateForSaleItems < ActiveRecord::Migration[7.0]
  def change
    create_table :for_sale_items do |t|
      t.integer :user_id
      t.integer :category_id
      t.string :itemTitle
      t.integer :itemPrice
      t.string :itemDescription
    
      t.timestamps
    end
  end
end
