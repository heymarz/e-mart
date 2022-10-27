class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.references :category, foreign_key: true
      t.text :images
      t.text :title
      t.decimal :price
      t.text :description
    
      t.timestamps
    end  

  end
end
