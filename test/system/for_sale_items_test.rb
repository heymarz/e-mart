require "application_system_test_case"

class ForSaleItemsTest < ApplicationSystemTestCase
  setup do
    @for_sale_item = for_sale_items(:one)
  end

  test "visiting the index" do
    visit for_sale_items_url
    assert_selector "h1", text: "For sale items"
  end

  test "should create for sale item" do
    visit for_sale_items_url
    click_on "New for sale item"

    fill_in "Category", with: @for_sale_item.category_id
    fill_in "Description", with: @for_sale_item.description
    fill_in "Img", with: @for_sale_item.img
    fill_in "Location", with: @for_sale_item.location
    fill_in "Price", with: @for_sale_item.price
    fill_in "Title", with: @for_sale_item.title
    fill_in "User", with: @for_sale_item.user_id
    click_on "Create For sale item"

    assert_text "For sale item was successfully created"
    click_on "Back"
  end

  test "should update For sale item" do
    visit for_sale_item_url(@for_sale_item)
    click_on "Edit this for sale item", match: :first

    fill_in "Category", with: @for_sale_item.category_id
    fill_in "Description", with: @for_sale_item.description
    fill_in "Img", with: @for_sale_item.img
    fill_in "Location", with: @for_sale_item.location
    fill_in "Price", with: @for_sale_item.price
    fill_in "Title", with: @for_sale_item.title
    fill_in "User", with: @for_sale_item.user_id
    click_on "Update For sale item"

    assert_text "For sale item was successfully updated"
    click_on "Back"
  end

  test "should destroy For sale item" do
    visit for_sale_item_url(@for_sale_item)
    click_on "Destroy this for sale item", match: :first

    assert_text "For sale item was successfully destroyed"
  end
end
