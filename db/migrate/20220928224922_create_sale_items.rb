class CreateSaleItems < ActiveRecord::Migration[7.0]
  def change
    create_table :sale_items do |t|
      t.references :seller, foreign_key: {to_table: :users}
      t.references :item, foreign_key: true
      t.integer :quantity, default: 1

      t.timestamps
    end
  end
end
