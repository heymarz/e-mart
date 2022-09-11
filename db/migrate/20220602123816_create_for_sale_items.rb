class CreateForSaleItems < ActiveRecord::Migration[7.0]
  def change
    create_table :for_sale_items do |t|
      t.references :seller
      t.integer :category_id
      t.string :images
      t.string :itemTitle
      t.integer :itemPrice
      t.string :itemDescription
    
      t.timestamps
    end  
    add_foreign_key "for_sale_items", "users", column: "seller_id"  
  end
end
