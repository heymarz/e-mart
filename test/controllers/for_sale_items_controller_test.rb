require "test_helper"

class ForSaleItemsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @for_sale_item = for_sale_items(:one)
  end

  test "should get index" do
    get for_sale_items_url
    assert_response :success
  end

  test "should get new" do
    get new_for_sale_item_url
    assert_response :success
  end

  test "should create for_sale_item" do
    assert_difference("ForSaleItem.count") do
      post for_sale_items_url, params: { for_sale_item: { category_id: @for_sale_item.category_id, description: @for_sale_item.description, img: @for_sale_item.img, location: @for_sale_item.location, price: @for_sale_item.price, title: @for_sale_item.title, user_id: @for_sale_item.user_id } }
    end

    assert_redirected_to for_sale_item_url(ForSaleItem.last)
  end

  test "should show for_sale_item" do
    get for_sale_item_url(@for_sale_item)
    assert_response :success
  end

  test "should get edit" do
    get edit_for_sale_item_url(@for_sale_item)
    assert_response :success
  end

  test "should update for_sale_item" do
    patch for_sale_item_url(@for_sale_item), params: { for_sale_item: { category_id: @for_sale_item.category_id, description: @for_sale_item.description, img: @for_sale_item.img, location: @for_sale_item.location, price: @for_sale_item.price, title: @for_sale_item.title, user_id: @for_sale_item.user_id } }
    assert_redirected_to for_sale_item_url(@for_sale_item)
  end

  test "should destroy for_sale_item" do
    assert_difference("ForSaleItem.count", -1) do
      delete for_sale_item_url(@for_sale_item)
    end

    assert_redirected_to for_sale_items_url
  end
end
