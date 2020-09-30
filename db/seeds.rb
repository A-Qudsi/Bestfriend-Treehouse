# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do
Spot.destroy_all
User.destroy_all

demoUser = User.create(email: 'test@aa.com', fname: 'demo', lname: 'user', date_of_birth: '01/01/1991', password: '123456')
user1 = User.create(email: 'user1@aa.com', fname: 'user', lname: '1', date_of_birth: '01/01/1991', password: '123456')
user2 = User.create(email: 'user2@aa.com', fname: 'user', lname: '2', date_of_birth: '01/01/1991', password: '123456')
user3 = User.create(email: 'user3@aa.com', fname: 'user', lname: '3', date_of_birth: '01/01/1991', password: '123456')
user4 = User.create(email: 'user4@aa.com', fname: 'user', lname: '4', date_of_birth: '01/01/1991', password: '123456')

spot1 = Spot.create(name: 'Entire treehouse in New York City', description: 'Spacious Treehouse For Many', latitude:40.7501414, longitude:-73.9830312, maxGuests: 4, price: 200, address: '22 W 38th St.' , city: 'New York City', host_id: user1.id)

spot2 = Spot.create(name: 'Treehouse room in Central Park Zoo', description: 'Family Apartment with Great Neighbors', latitude: 40.770184, longitude: -73.976758, maxGuests: 2, price: 400, address: '830 5th Avenue' , city: 'New York City', host_id: user2.id)

spot3 = Spot.create(name: 'Entire Treehouse in Central Park', description: 'In The Heart of Central Park', latitude: 40.792818, longitude: -73.958885, maxGuests: 3, price: 250, address: '102nd St Crossing' , city: 'New York City', host_id: user3.id)

spot4 = Spot.create(name: 'Entire Treehouse in Midtown', description: 'Large Private Treehouse Suite In The Heart of Midtown', latitude: 40.753226,  longitude: -73.982852, maxGuests: 6, price: 300, address: '830 5th Avenue' , city: 'New York City', host_id: user4.id)

end