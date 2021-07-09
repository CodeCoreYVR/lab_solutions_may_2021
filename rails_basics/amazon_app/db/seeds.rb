# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.destroy_all

50.times do
    created_time = Faker::Date.between(from: '2000-09-23', to: '2030-09-25')
    p = Product.create(
        title: Faker::FunnyName.name,
        description: Faker::Restaurant.name,
        created_at: created_time,
        updated_at: created_time
    )
    if p.valid?
        p.reviews = rand(1..3).times.map do
            Review.new(body: Faker::Address.street_address,rating:rand(1..5))
        end
    end
end

products = Product.all
reivews = Review.all


puts products.count
puts reivews.count