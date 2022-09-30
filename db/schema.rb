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

ActiveRecord::Schema[7.0].define(version: 2022_09_28_230049) do
  create_table "categories", force: :cascade do |t|
    t.string "category_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "favorites", force: :cascade do |t|
    t.integer "buyer_id"
    t.integer "item_id"
    t.index ["buyer_id", "item_id"], name: "index_favorites_on_buyer_id_and_item_id", unique: true
    t.index ["buyer_id"], name: "index_favorites_on_buyer_id"
    t.index ["item_id"], name: "index_favorites_on_item_id"
  end

  create_table "items", force: :cascade do |t|
    t.integer "category_id"
    t.string "images"
    t.string "title"
    t.decimal "price"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_items_on_category_id"
  end

  create_table "sale_items", force: :cascade do |t|
    t.integer "seller_id"
    t.integer "item_id"
    t.integer "quantity", default: 1
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["item_id"], name: "index_sale_items_on_item_id"
    t.index ["seller_id"], name: "index_sale_items_on_seller_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "favorites", "items"
  add_foreign_key "favorites", "users", column: "buyer_id"
  add_foreign_key "items", "categories"
  add_foreign_key "sale_items", "items"
  add_foreign_key "sale_items", "users", column: "seller_id"
end
