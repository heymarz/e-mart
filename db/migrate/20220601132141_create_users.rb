class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.text :username, null: false
      t.text :email, null: false
      t.text :password_digest

      t.timestamps
    end
  end
end
