class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.text :userReview
      t.integer :buyer_id

      t.timestamps
    end
  end
end
