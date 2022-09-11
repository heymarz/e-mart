puts "🌱 Seeding spices..."

mars = User.create(username: "mars", email: "mars@gmail.com", password: "mars")

roger = User.create(username: "roger", email: "roger@gmail.com", password: "roger")

Category.create(categoryName: "Kitchen");
Category.create(categoryName: "Household Applicances");
Category.create(categoryName: "Funiture");
Category.create(categoryName: "Computer & Accessories");

image = "https://firebasestorage.googleapis.com/v0/b/e-mart-imgs.appspot.com/o/images%2FFile%20cabinet.jpeg07eacf6b-1c2f-4b10-bbfb-6fc9bc52aa9b?alt=media&token=7f9f0ed9-cafc-430e-b279-3630afdec6d6"

ForSaleItem.create(itemTitle: "Fold out Wood Dining table", category_id: 1, itemDescription: "Great condition. Table is round with a diameter of 36\".", itemPrice: 75, images: image, seller_id: roger.id);

ForSaleItem.create(itemTitle: "Beautiful black wood stained Dining Table Set", category_id: 1, itemDescription: "Excellent Condition. Table is being sold as a set with the chairs.", itemPrice: 150, images: image, seller_id: roger.id);

ForSaleItem.create(itemTitle: "Green desk lamp with Solar Rechargable", category_id: 2, itemDescription: "Excellent condition. The lamp has a solar power on the base so you can recharge effortlessly.", itemPrice: 20, images: image, seller_id: roger.id);

ForSaleItem.create(itemTitle: "Keyboard with DSA keycaps", category_id: 4, itemDescription: "Keyboard was never used. Product is new and still in packaging.", itemPrice: 200, images: image, seller_id: roger.id);

ForSaleItem.create(itemTitle: "Frigidarire AC", category_id: 2, itemDescription: "6,000 BTU. Comes with remote.", itemPrice: 120, images: image, seller_id: roger.id);

ForSaleItem.create(itemTitle: "Zain Z Chair", category_id: 3, itemDescription: "NyeKoncept Zain Lounge chair, Z chair style, ash wood with walnut finish, oatmeal fabric upholstery. Very good condition, minor bumping and scratches to wood frame but overall handsome.  D: 37\", W: 31.25\", H: 34.25\" ", itemPrice: 500, images: image, seller_id: roger.id);

ForSaleItem.create(itemTitle: "File Cabinet with 4 draws", category_id: 3, itemDescription: "Great condition. Pick up only. D: 22\", W: 15\", H: 52\" ", itemPrice: 50, images: image, seller_id: roger.id);

ForSaleItem.create(itemTitle: "Portable Wood top Table", category_id: 1, itemDescription: "Wood top table in excellent condition. Comes with 2 wire shelves and hooks on side. Wheels are able to lock and unlock for easy portability when needed. Product still in box.", itemPrice: 75, images: image, seller_id: roger.id);

ForSaleItem.create(itemTitle: "Cintage Hand Woven Area Rug", category_id: 2, itemDescription: "The rug is 14X10. Fringes on 10-foot edges, only. The rug was made in India for R. H. Macy's department stores. Style information is Peking, 8931.", itemPrice: 760, images: image, seller_id: roger.id);

ForSaleItem.create(itemTitle: "Large Toshiba Microwave with 13 1/2 inch plate", category_id: 1, itemDescription: "One Large Toshiba Microwave with 13 1/2 inch plate, about 2 years old, works perfectly except for the digital display.", itemPrice: 20, images: image, seller_id: roger.id);

puts "✅ Done seeding!"