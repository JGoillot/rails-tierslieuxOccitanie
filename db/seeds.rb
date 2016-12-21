# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


WorkingPlace.all.each do |wp|
  puts wp.name
  if wp.zip_code.blank? == false
    wp.departement = wp.zip_code[0..1]
    wp.save
  end
end
