class CreateSellers < ActiveRecord::Migration[7.0]
  def change
    create_table :sellers do |t|
      t.string :sellerName
      t.string :email
      t.string :password_digest
      
      t.string :businessName
      t.string :businessAddress
      t.string :businessCityAndState
      t.integer :businessZipcode

      t.timestamps
    end
  end
end
