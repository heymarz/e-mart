puts "🌱 Seeding spices..."

mars = User.create(username: "mars", email: "mars@gmail.com", password: "mars")

roger = User.create(username: "roger", email: "roger@gmail.com", password: "roger")

Category.create(category_name: "Kitchen");
Category.create(category_name: "Household Applicances");
Category.create(category_name: "Funiture");
Category.create(category_name: "Computer & Accessories");

one = Item.create(title: "Fold out Wood Dining table", category_id: 1, description: "Great condition. Table is round with a diameter of 36\".", price: 75.00, images: "https://firebasestorage.googleapis.com/v0/b/e-mart-imgs.appspot.com/o/images%2Ffold%20out%20table%201.jpeg?alt=media&token=84f26913-8c47-4ca5-aec5-fee7129ba0bb, https://firebasestorage.googleapis.com/v0/b/e-mart-imgs.appspot.com/o/images%2Ffold%20out%20table%202.jpeg?alt=media&token=bcd81f37-52cb-4fef-ae88-bbd598f2a7db, https://firebasestorage.googleapis.com/v0/b/e-mart-imgs.appspot.com/o/images%2Ffold%20out%20table%203.jpeg?alt=media&token=c10e9ed1-9d44-4dd6-8879-9dda3eacad5b");

two = Item.create(title: "Beautiful black wood stained Dining Table Set", category_id: 1, description: "Excellent Condition. Table is being sold as a set with the chairs.", price: 150.00, images: "https://firebasestorage.googleapis.com/v0/b/e-mart-imgs.appspot.com/o/images%2Fblk%20table.jpeg?alt=media&token=99e6da99-64c7-413e-aea2-81c2eed4acda, https://firebasestorage.googleapis.com/v0/b/e-mart-imgs.appspot.com/o/images%2Fz%20chair%202.jpegba122093-77a2-4448-bc77-906dc54ce5ae?alt=media&token=a5f4675d-bb6b-4a60-b6d5-940c858f1917");

three = Item.create(title: "Green desk lamp with Solar Rechargable", category_id: 2, description: "Excellent condition. The lamp has a solar power on the base so you can recharge effortlessly.", price: 20.00, images: "https://firebasestorage.googleapis.com/v0/b/e-mart-imgs.appspot.com/o/images%2Fgreen%20bank%20lamp.jpg?alt=media&token=9427c2a6-52b8-4f03-b0af-15ef3f574b96");

four = Item.create(title: "Keyboard with DSA keycaps", category_id: 4, description: "Keyboard was never used. Product is new and still in packaging.", price: 200.00, images: "https://firebasestorage.googleapis.com/v0/b/e-mart-imgs.appspot.com/o/images%2Fkeycaps.webp?alt=media&token=201e477e-b2fe-4e3e-9566-2ac48193bbc7");

five = Item.create(title: "Frigidarire AC", category_id: 2, description: "6,000 BTU. Comes with remote.", price: 120.00, images: "https://firebasestorage.googleapis.com/v0/b/e-mart-imgs.appspot.com/o/images%2Fac%20eg2.jpeg?alt=media&token=85278080-b99e-49aa-96d4-8af1af9ed4f9, https://firebasestorage.googleapis.com/v0/b/e-mart-imgs.appspot.com/o/images%2Fac%20eg.jpeg9f299f97-2ba3-4fe4-8364-9b049b175993?alt=media&token=41a88211-1f0e-4f6a-93b5-f0ace5e24905");

six = Item.create(title: "Zain Z Chair", category_id: 3, description: "NyeKoncept Zain Lounge chair, Z chair style, ash wood with walnut finish, oatmeal fabric upholstery. Very good condition, minor bumping and scratches to wood frame but overall handsome.  D: 37\", W: 31.25\", H: 34.25\" ", price: 500.00, images: "https://firebasestorage.googleapis.com/v0/b/e-mart-imgs.appspot.com/o/images%2Fz%20chair%20.jpeg301bc68f-3364-4fea-934b-cd6a0c8fa0eb?alt=media&token=a91d782f-169a-48d2-85ce-32b65ef9e6fa, https://firebasestorage.googleapis.com/v0/b/e-mart-imgs.appspot.com/o/images%2Fz%20chair%202.jpegba122093-77a2-4448-bc77-906dc54ce5ae?alt=media&token=a5f4675d-bb6b-4a60-b6d5-940c858f1917");

seven = Item.create(title: "File Cabinet with 4 draws", category_id: 3, description: "Great condition. Pick up only. D: 22\", W: 15\", H: 52\" ", price: 50.00, images: "https://firebasestorage.googleapis.com/v0/b/e-mart-imgs.appspot.com/o/images%2FFile%20cabinet.jpeg07eacf6b-1c2f-4b10-bbfb-6fc9bc52aa9b?alt=media&token=7f9f0ed9-cafc-430e-b279-3630afdec6d6");

eight = Item.create(title: "Portable Wood top Table", category_id: 1, description: "Wood top table in excellent condition. Comes with 2 wire shelves and hooks on side. Wheels are able to lock and unlock for easy portability when needed. Product still in box.", price: 75.00, images: "https://firebasestorage.googleapis.com/v0/b/e-mart-imgs.appspot.com/o/images%2Fkit%20cart%202.jpeg4220d5ea-28d0-41d2-8a2f-64fabd6812be?alt=media&token=e5a56a6e-db37-4f8d-bf25-03f6850f97db");

nine = Item.create(title: "Vintage Hand Woven Area Rug", category_id: 2, description: "The rug is 14X10. Fringes on 10-foot edges, only. The rug was made in India for R. H. Macy's department stores. Style information is Peking, 8931.", price: 760.00, images: "https://firebasestorage.googleapis.com/v0/b/e-mart-imgs.appspot.com/o/images%2Fcarpet%201.jpeg20fa9485-2401-425b-bd80-0a3c3b611a3a?alt=media&token=b552b53d-0c52-4973-94e6-7f717cc4c323, https://firebasestorage.googleapis.com/v0/b/e-mart-imgs.appspot.com/o/images%2Fcarpet%202.jpeg3541b080-aba9-4109-9463-fad071dea791?alt=media&token=dad1d661-60ba-41e6-8306-9f257dfc04f3, https://firebasestorage.googleapis.com/v0/b/e-mart-imgs.appspot.com/o/images%2Fcarpet%203.jpeg1277812f-5257-4ea5-b92c-962b1f0fd105?alt=media&token=773eb707-52d7-42b4-af6d-2ab354bb538f");

ten = Item.create(title: "Large Toshiba Microwave with 13 1/2 inch plate", category_id: 1, description: "One Large Toshiba Microwave with 13 1/2 inch plate, about 2 years old, works perfectly except for the digital display.", price: 205.00, images: "https://firebasestorage.googleapis.com/v0/b/e-mart-imgs.appspot.com/o/images%2Fmicrowave.jpeg50b3d2d0-4cdf-45d0-8ba0-3f0f08afb550?alt=media&token=9ab14a78-4514-4b45-a324-b93afc34c673, https://firebasestorage.googleapis.com/v0/b/e-mart-imgs.appspot.com/o/images%2Fmicrowave%203.jpeg900453d8-01ab-47ea-b3df-ee50ea8a93bc?alt=media&token=ec5860c5-d84a-4777-b8ae-713935d1a935, https://firebasestorage.googleapis.com/v0/b/e-mart-imgs.appspot.com/o/images%2Fmicrowave%202.jpeg96632c84-06e8-4ff5-baa8-f7a67e1a2944?alt=media&token=4035a3e0-1a25-49fb-802a-c36c897446ce");

  for i in Item.all do 
    SaleItem.create(seller_id: roger.id, item_id: i.id) 
  end

  Favorite.create(buyer_id: mars.id, item_id: one.id)


puts "✅ Done seeding!"