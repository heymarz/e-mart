puts "🌱 Seeding spices..."

mars = User.create(username: "mars", email: "mars@gmail.com", password: "123")
roger = User.create(username: "roger", email: "roger@gmail.com", password: "123")

roger.ForSaleItem.create(img: "", title: "", category: "", body: "", location: "")

puts "✅ Done seeding!"