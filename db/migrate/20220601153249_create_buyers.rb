class CreateBuyers < ActiveRecord::Migration[7.0]
  def change
    create_table :buyers do |t|
      t.string :buyerName
      t.string :email
      t.string :password_digest
      

      t.string :buyerAddress
      t.string :buyerCityAndState
      t.integer :buyerZipcode

      t.timestamps
    end
  end
end
