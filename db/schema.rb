# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_06_01_213116) do
  create_table "buyers", force: :cascade do |t|
    t.string "buyerName"
    t.string "email"
    t.string "password_digest"
    t.string "buyerAddress"
    t.string "buyerCityAndState"
    t.integer "buyerZipcode"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "categories", force: :cascade do |t|
    t.string "categoryName"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "for_sale_items", force: :cascade do |t|
    t.integer "seller_id"
    t.integer "category_id"
    t.string "itemTitle"
    t.integer "itemPrice"
    t.string "itemImg"
    t.string "itemDescription"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.text "userReview"
    t.integer "buyer_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sellers", force: :cascade do |t|
    t.string "sellerName"
    t.string "email"
    t.string "password_digest"
    t.string "businessName"
    t.string "businessAddress"
    t.string "businessCityAndState"
    t.integer "businessZipcode"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
