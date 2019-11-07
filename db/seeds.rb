# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create({username: "Kevin_Shields", email: "mybloodyvalentine@gmail.com", password: "shoegaze"})
user2 = User.create({username: "Rachel_Goswell", email: "slowdive@gmail.com", password: "shoegaze"})
user3 = User.create({username: "Andy_Bell", email: "ride@gmail.com", password: "shoegaze"})
user4 = User.create({username: "Jim_Reed", email: "jesusandmarychain@gmail.com", password: "shoegaze"})

song1 = Song.create({title: "Sometimes", album: "Loveless", genre: "shoegaze", user_id: 1})
song1 = Song.create({title: "Alison", album: "Souvlaki", genre: "shoegaze", user_id: 2})
song1 = Song.create({title: "Vapour Trail", album: "Nowhere", genre: "shoegaze", user_id: 3})
song1 = Song.create({title: "Just Like Honey", album: "Psychocandy", genre: "shoegaze", user_id: 4})