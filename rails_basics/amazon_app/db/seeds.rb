# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.destroy_all

1000.times do
    created_time = Faker::Date.between(from: '2000-09-23', to: '2030-09-25')
    Product.create(
        title: Faker::FunnyName.name,
        description: Faker::Restaurant.name,
        created_at: created_time,
        updated_at: created_time
    )
end

list = Product.all

puts list.count