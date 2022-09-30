class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.references :buyer, foreign_key: {to_table: :users}
      t.references :item, foreign_key: true
    end
  end
end
