class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.references :category, foreign_key: true
      t.string :images
      t.string :title
      t.decimal :price
      t.string :description
    
      t.timestamps
    end  

  end
end
