
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  require 'open-uri'
  User.destroy_all
  Album.destroy_all
  Song.destroy_all


  
  
  # ******************* artists ******************* 
  
  
  demo_user = User.create({username: "GlasgowFan65", email: "iloveshoegaze@gmail.com", password: "shoegaze"})
  myBloodyValentine = User.create({username: "My Bloody Valentine", email: "iloveshoegaze@gmail.com", password: "shoegaze"})
  slowdive = User.create({username: "Slowdive", email: "slowdive@gmail.com", password: "shoegaze"})
  ride = User.create({username: "Ride", email: "ride@gmail.com", password: "shoegaze"})
  theJesusAndMaryChain = User.create({username: "The Jesus & Mary Chain", email: "jesusandmarychain@gmail.com", password: "shoegaze"})
  alcest = User.create({username: "Alcest", email: "alcest@gmail.com", password: "shoegaze"})
  nothing = User.create({username: "Nothing", email: "nothing@gmail.com", password: "shoegaze"})
  theRaveonettes = User.create({username: "The Raveonettes", email: "theraveonettes@gmail.com", password: "shoegaze"})
  theBrianJonestownMassacre = User.create({username: "The Brian Jonestown Massacre", email: "thebrianjonestownmassacre@gmail.com", password: "shoegaze"})
  theCure = User.create({username: "The Cure", email: "thecure@gmail.com", password: "shoegaze"})
  galaxie500 = User.create({username: "Galaxie500", email: "galaxie500@gmail.com", password: "shoegaze"})
  deafheaven = User.create({username: "Deafheaven", email: "deafheaven@gmail.com", password: "shoegaze"})
  elvisDepressedly = User.create({username: "Elvis Depressedly", email: "elvisDepressedly@gmail.com", password: "shoegaze"})
  chapterhouse = User.create({username: "Chapterhouse", email: "chapterhouse@gmail.com", password: "shoegaze"})
  theRadioDept = User.create({username: "The Radio Dept", email: "theRadioDept@gmail.com", password: "shoegaze"}) 
  paleSaints = User.create({username: "Pale Saints", email: "paleSaints@gmail.com", password: "shoegaze"}) 
  spiritualized = User.create({username: "Spiritualized", email: "spiritualized@gmail.com", password: "shoegaze"}) 
  hatchie = User.create({username: "Hatchie", email: "hatchie@gmail.com", password: "shoegaze"}) 
  diiv = User.create({username: "DIIV", email: "diiv@gmail.com", password: "shoegaze"}) 
  cocteauTwins = User.create({username: "Cocteau Twins", email: "cocteauTwins@gmail.com", password: "shoegaze"}) 
  m83 = User.create({username: "M83", email: "m83@gmail.com", password: "shoegaze"}) 
  westkust = User.create({username: "Westkust", email: "westkust@gmail.com", password: "shoegaze"})
  lush = User.create({username: "Lush", email: "lush@gmail.com", password: "shoegaze"}) 
  ringoDeathstarr = User.create({username: "Ringo Deathstarr", email: "ringoDeathstarr@gmail.com", password: "shoegaze"}) 
  orchidTapes = User.create({username: "Orchid Tapes", email: "orchidTapes@gmail.com", password: "shoegaze"})
  wildNothing = User.create({username: "Wild Nothing", email: "wildNothing@gmail.com", password: "shoegaze"})
  widowspeak = User.create({username: "Widowspeak", email: "widowspeak@gmail.com", password: "shoegaze"})
  theBlackRyder = User.create({username: "The Black Ryder", email: "theBlackRyder@gmail.com", password: "shoegaze"})
  lostInTranslation = User.create({username: "Lost In Translation", email: "lostInTranslation@gmail.com", password: "shoegaze"})
  myrkur = User.create({username: "Myrkur", email: "myrkur@gmail.com", password: "shoegaze"})
  foxesInFiction = User.create({username: "Foxes In Fiction", email: "foxesInFiction@gmail.com", password: "shoegaze"})
  mazzyStar = User.create({username: "Mazzy Star", email: "mazzyStar@gmail.com", password: "shoegaze"})
  japaneseBreakfast = User.create({username: "Japanese Breakfast", email: "japaneseBreakfast@gmail.com", password: "shoegaze"})
  haveANiceLife = User.create({username: "Have A Nice Life", email: "haveANiceLife@gmail.com", password: "shoegaze"})

  # *******************albums*******************


  # myBloodyValentine
  isntAnything = Album.create({title: "Isn't Anything", user_id: myBloodyValentine.id}) 
  loveless = Album.create({title: "Loveless", user_id: myBloodyValentine.id}) 
  mbv = Album.create({title: "MBV", user_id: myBloodyValentine.id}) 

  # slowdive
  justForADay = Album.create({title: "Just For A Day", user_id: slowdive.id}) 
  souvlaki = Album.create({title: "Souvlaki", user_id: slowdive.id}) 
  slowdiveAlbum = Album.create({title: "Slowdive", user_id: slowdive.id}) 

  # ride
  nowhere = Album.create({title: "Nowhere", user_id: ride.id}) 
  goingBlankAgain = Album.create({title: "Going Blank Again", user_id: ride.id}) 
  thisIsNotASafePlace = Album.create({title: "This Is Not A Safe Place", user_id: ride.id}) 

  # theJesusAndMaryChain
  psychocandy = Album.create({title: "Psychocandy", user_id: theJesusAndMaryChain.id}) 
  darklands = Album.create({title: "Darklands", user_id: theJesusAndMaryChain.id}) 

  # alcest
  souvenirsDunAutreMonde = Album.create({title: "Souvenirs D'un Autre Monde", user_id: alcest.id}) 
  lesVoyagesDeLame = Album.create({title: "Les Voyages De Lame", user_id: alcest.id}) 
  shelter = Album.create({title: "Shelter", user_id: alcest.id}) 
  spiritualInstinct = Album.create({title: "Spiritual Instinct", user_id: alcest.id}) 

  # nothing
  guiltyOfEverything = Album.create({title: "Guilty Of Everything", user_id: nothing.id}) 
  tiredOfTomorrow = Album.create({title: "Tired Of Tomorrow", user_id: nothing.id}) 

  # theRaveonettes
  lustLustLust = Album.create({title: "Lust Lust Lust", user_id: theRaveonettes.id})
  peahi = Album.create({title: "Pe'ahi", user_id: theRaveonettes.id})

  # theBrianJonestownMassacre
  methodrone = Album.create({title: "Methodrone", user_id: theBrianJonestownMassacre.id})

  # theCure
  disintegration = Album.create({title: "Disintegration", user_id: theCure.id})

  # galaxie500
  today = Album.create({title: "Today", user_id: galaxie500.id})

  # deafheaven
  sunbather = Album.create({title: "Sunbather", user_id: deafheaven.id})

  # elvisDepressedly
  holoPleasures = Album.create({title: "Holo Pleasures", user_id: elvisDepressedly.id})

  # chapterhouse
  whirlpool = Album.create({title: "Whirlpool", user_id: chapterhouse.id})

  # theRadioDept
  lesserMatters = Album.create({title: "Lesser Matters", user_id: theRadioDept.id})

  # paleSaints
  theComfortsOfMadness = Album.create({title: "The Comforts Of Madness", user_id: paleSaints.id})

  # spiritualized
  ladiesAndGentlemenWeAreFloatingInSpace = Album.create({title: "Ladies and Gentlemen We Are Floating In Space", user_id: spiritualized.id})
  lazerGuidedMelodies = Album.create({title: "Lazer Guided Melodies", user_id: spiritualized.id})

  # hatchie
  keepsake = Album.create({title: "Keepsake", user_id: hatchie.id})

  # diiv
  oshin = Album.create({title: "Oshin", user_id: diiv.id})
  isTheIsAre = Album.create({title: "Is The Is Are", user_id: diiv.id})
  deceiver = Album.create({title: "Deceiver", user_id: diiv.id})

  # cocteauTwins
  treasure = Album.create({title: "Treasure", user_id: cocteauTwins.id})
  heavenOrLasVegas = Album.create({title: "Heaven Or Las Vegas", user_id: cocteauTwins.id})

  # m83
  deadCitiesRedSeasAndLostGhosts= Album.create({title: "Dead Cities, Red Seas & Lost Ghosts", user_id: m83.id})

  # westkust
  lastForever= Album.create({title: "Last Forever", user_id: westkust.id})

  # lush
  split= Album.create({title: "Split", user_id: lush.id})

  # ringoDeathstarr
  colourTrip = Album.create({title: "Colour Trip", user_id: ringoDeathstarr.id})

  #orchidTapes
  boringEcstacy = Album.create({title: "Boring Ecstacy", user_id: boringEcstacy.id})

  #wildNothing
  gemini = Album.create({title: "Gemini", user_id: wildNothing.id})
  nocturne = Album.create({title: "Nocturne", user_id: wildNothing.id})

  #widowspeak
  theSwamp = Album.create({title: "The Swamp", user_id: widowspeak.id})

  #theBlackRyder
  buyTheTicketTakeTheRide = Album.create({title: "Buy The Ticket, Take The Ride", user_id: theBlackRyder.id})
  theDoorBehindTheDoor = Album.create({title: "The Door Behind The Door", user_id: theBlackRyder.id})

  #lostInTranslation
  lostInTranslationSoundtrack = Album.create({title: "Lost In Translation Soundtrack", user_id: lostInTranslation.id})

  #myrkur
  myrkurAlbum = Album.create({title: "Myrkur", user_id: myrkur.id})

  #foxesInFiction
  ontarioGothic = Album.create({title: "Ontario Gothic", user_id: foxesInFiction.id})

  #mazzyStar
  sheHangsBrightly = Album.create({title: "She Hangs Brightly", user_id: mazzyStar.id})
  soTonightThatIMightSee = Album.create({title: "So Tonight That I Might See", user_id: mazzyStar.id})
  amongMySwans = Album.create({title: "Among My Swans", user_id: mazzyStar.id})
  seasonsOfYourDay = Album.create({title: "Seasons Of Your Day", user_id: mazzyStar.id})

  #japaneseBreakfast
  psychopomp = Album.create({title: "Psychopomp", user_id: japaneseBreakfast.id})

  #haveANiceLife
  deathconsciousness = Album.create({title: "Deathconsciousness", user_id: haveANiceLife.id})
  



  # ******************* Songs ******************* 

  #MY_BLOODY_VALENTINE

  isntAnything1 = Song.create({title: "Soft As Snow (But Warm Inside)", album_id: isntAnything.id, genre:"shoegaze", user_id: myBloodyValentine.id})
  isntAnything2 = Song.create({title: "Lose My Breath", album_id: isntAnything.id, genre:"shoegaze", user_id: myBloodyValentine.id})
  isntAnything3 = Song.create({title: "Cupid Come", album_id: isntAnything.id, genre:"shoegaze", user_id: myBloodyValentine.id})
  isntAnything4 = Song.create({title: "(When You Wake) You're Still In A Dream", album_id: isntAnything.id, genre:"shoegaze", user_id: myBloodyValentine.id})
  isntAnything5 = Song.create({title: "No More Sorry", album_id: isntAnything.id, genre:"shoegaze", user_id: myBloodyValentine.id})
  isntAnything6 = Song.create({title: "All I Need", album_id: isntAnything.id, genre:"shoegaze", user_id: myBloodyValentine.id})
  isntAnything7 = Song.create({title: "Feed Me With Your Kiss", album_id: isntAnything.id, genre:"shoegaze", user_id: myBloodyValentine.id})
  isntAnything8 = Song.create({title: "Sueisfine", album_id: isntAnything.id, genre:"shoegaze", user_id: myBloodyValentine.id})
  isntAnything9 = Song.create({title: "Several Girls Galore", album_id: isntAnything.id, genre:"shoegaze", user_id: myBloodyValentine.id})
  isntAnything10 = Song.create({title: "You Never Should", album_id: isntAnything.id, genre:"shoegaze", user_id: myBloodyValentine.id})
  isntAnything11 = Song.create({title: "Nothing Much To Lose", album_id: isntAnything.id, genre:"shoegaze", user_id: myBloodyValentine.id})
  isntAnything12 = Song.create({title: "I Can See It (But I Can't Feel It)", album_id: isntAnything.id, genre:"shoegaze", user_id: myBloodyValentine.id})

  Loveless1 = Song.create({title: "Only Shallow", album_id: loveless.id, genre: "shoegaze", user_id: myBloodyValentine.id})
  Loveless2 = Song.create({title: "Loomer", album_id: loveless.id, genre: "shoegaze", user_id: myBloodyValentine.id})
  Loveless3 = Song.create({title: "Touched", album_id: loveless.id, genre: "shoegaze", user_id: myBloodyValentine.id})
  Loveless4 = Song.create({title: "To Here Knows When", album_id: loveless.id, genre: "shoegaze", user_id: myBloodyValentine.id})
  Loveless5 = Song.create({title: "When You Sleep", album_id: loveless.id, genre: "shoegaze", user_id: myBloodyValentine.id})
  Loveless6 = Song.create({title: "I Only Said", album_id: loveless.id, genre: "shoegaze", user_id: myBloodyValentine.id})
  Loveless7 = Song.create({title: "Come In Alone", album_id: loveless.id, genre: "shoegaze", user_id: myBloodyValentine.id})
  Loveless8 = Song.create({title: "Sometimes", album_id: loveless.id, genre: "shoegaze", user_id: myBloodyValentine.id})
  Loveless9 = Song.create({title: "Blown A Wish", album_id: loveless.id, genre: "shoegaze", user_id: myBloodyValentine.id})
  Loveless10 = Song.create({title: "What You Want", album_id: loveless.id, genre: "shoegaze", user_id: myBloodyValentine.id})
  Loveless11 = Song.create({title: "Soon", album_id: loveless.id, genre: "shoegaze", user_id: myBloodyValentine.id})

  mbv1 = Song.create({title: "She Found Now", album_id: mbv.id, genre:"shoegaze", user_id: myBloodyValentine.id})
  mbv2 = Song.create({title: "Only Tomorrow", album_id: mbv.id, genre:"shoegaze", user_id: myBloodyValentine.id})
  mbv3 = Song.create({title: "Who Sees You", album_id: mbv.id, genre:"shoegaze", user_id: myBloodyValentine.id})
  mbv4 = Song.create({title: "Is This And Yes", album_id: mbv.id, genre:"shoegaze", user_id: myBloodyValentine.id})
  mbv5 = Song.create({title: "If I Am", album_id: mbv.id, genre:"shoegaze", user_id: myBloodyValentine.id})
  mbv6 = Song.create({title: "New You", album_id: mbv.id, genre:"shoegaze", user_id: myBloodyValentine.id})
  mbv7 = Song.create({title: "In Another Way", album_id: mbv.id, genre:"shoegaze", user_id: myBloodyValentine.id})
  mbv8 = Song.create({title: "Nothing Is", album_id: mbv.id, genre:"shoegaze", user_id: myBloodyValentine.id})
  mbv9 = Song.create({title: "Wonder 2", album_id: mbv.id, genre:"shoegaze", user_id: myBloodyValentine.id})


  #SLOWDIVE

  justForADay1 = Song.create({title: "Spanish Air", album_id: justForADay.id, genre: "shoegaze", user_id: slowdive.id})
  justForADay2 = Song.create({title: "Celia's Dream", album_id: justForADay.id, genre: "shoegaze", user_id: slowdive.id})
  justForADay3 = Song.create({title: "Catch The Breeze", album_id: justForADay.id, genre: "shoegaze", user_id: slowdive.id})
  justForADay4 = Song.create({title: "Ballad Of Sister Sue", album_id: justForADay.id, genre: "shoegaze", user_id: slowdive.id})
  justForADay5 = Song.create({title: "Erik's Song", album_id: justForADay.id, genre: "shoegaze", user_id: slowdive.id})
  justForADay6 = Song.create({title: "Waves", album_id: justForADay.id, genre: "shoegaze", user_id: slowdive.id})
  justForADay7 = Song.create({title: "Brighter", album_id: justForADay.id, genre: "shoegaze", user_id: slowdive.id})
  justForADay8 = Song.create({title: "The Sadman", album_id: justForADay.id, genre: "shoegaze", user_id: slowdive.id})
  justForADay9 = Song.create({title: "Primal", album_id: justForADay.id, genre: "shoegaze", user_id: slowdive.id})

  Souvlaki1 = Song.create({title: "Alison", album_id: souvlaki.id, genre: "shoegaze", user_id: slowdive.id})
  Souvlaki2 = Song.create({title: "Machine Gun", album_id: souvlaki.id, genre: "shoegaze", user_id: slowdive.id})
  Souvlaki3 = Song.create({title: "40 Days", album_id: souvlaki.id, genre: "shoegaze", user_id: slowdive.id})
  Souvlaki4 = Song.create({title: "Sing", album_id: souvlaki.id, genre: "shoegaze", user_id: slowdive.id})
  Souvlaki5 = Song.create({title: "Here She Comes", album_id: souvlaki.id, genre: "shoegaze", user_id: slowdive.id})
  Souvlaki6 = Song.create({title: "Souvlaki Space Station", album_id: souvlaki.id, genre: "shoegaze", user_id: slowdive.id})
  Souvlaki7 = Song.create({title: "When The Sun Hits", album_id: souvlaki.id, genre: "shoegaze", user_id: slowdive.id})
  Souvlaki8 = Song.create({title: "Altogether", album_id: souvlaki.id, genre: "shoegaze", user_id: slowdive.id})
  Souvlaki9 = Song.create({title: "Melon Yellow", album_id: souvlaki.id, genre: "shoegaze", user_id: slowdive.id})
  Souvlaki10 = Song.create({title: "Dagger", album_id: souvlaki.id, genre: "shoegaze", user_id: slowdive.id})

  slowdiveAlbum1 = Song.create({title: "Slomo", album_id: slowdiveAlbum.id, genre: "shoegaze", user_id: slowdive.id})
  slowdiveAlbum2 = Song.create({title: "Star Roving", album_id: slowdiveAlbum.id, genre: "shoegaze", user_id: slowdive.id})
  slowdiveAlbum3 = Song.create({title: "Don't Know Why", album_id: slowdiveAlbum.id, genre: "shoegaze", user_id: slowdive.id})
  slowdiveAlbum4 = Song.create({title: "Sugar For The Pill", album_id: slowdiveAlbum.id, genre: "shoegaze", user_id: slowdive.id})
  slowdiveAlbum5 = Song.create({title: "Everyone Knows", album_id: slowdiveAlbum.id, genre: "shoegaze", user_id: slowdive.id})
  slowdiveAlbum6 = Song.create({title: "No Longer Making Time", album_id: slowdiveAlbum.id, genre: "shoegaze", user_id: slowdive.id})
  slowdiveAlbum7 = Song.create({title: "Go Get It", album_id: slowdiveAlbum.id, genre: "shoegaze", user_id: slowdive.id})
  slowdiveAlbum8 = Song.create({title: "Falling Ashes", album_id: slowdiveAlbum.id, genre: "shoegaze", user_id: slowdive.id})


  # RIDE

  Nowhere1 = Song.create({title: "Seagull", album_id: nowhere.id, genre: "shoegaze", user_id: ride.id})
  Nowhere2 = Song.create({title: "Kaleidoscope", album_id: nowhere.id, genre: "shoegaze", user_id: ride.id})
  Nowhere3 = Song.create({title: "In A Different Place", album_id: nowhere.id, genre: "shoegaze", user_id: ride.id})
  Nowhere4 = Song.create({title: "Polar Bear", album_id: nowhere.id, genre: "shoegaze", user_id: ride.id})
  Nowhere5 = Song.create({title: "Dreams Burn Down", album_id: nowhere.id, genre: "shoegaze", user_id: ride.id})
  Nowhere6 = Song.create({title: "Decay", album_id: nowhere.id, genre: "shoegaze", user_id: ride.id})
  Nowhere7 = Song.create({title: "Paralysed", album_id: nowhere.id, genre: "shoegaze", user_id: ride.id})
  Nowhere8 = Song.create({title: "Vapour Trail", album_id: nowhere.id, genre: "shoegaze", user_id: ride.id})
  Nowhere9 = Song.create({title: "Taste", album_id: nowhere.id, genre: "shoegaze", user_id: ride.id})
  Nowhere10 = Song.create({title: "Here And Now", album_id: nowhere.id, genre: "shoegaze", user_id: ride.id})
  Nowhere11 = Song.create({title: "Nowhere", album_id: nowhere.id, genre: "shoegaze", user_id: ride.id})

  goingBlankAgain1 = Song.create({title: "Leave Them All Behind", album_id: goingBlankAgain.id, genre: "shoegaze", user_id: ride.id})
  goingBlankAgain2 = Song.create({title: "Twisterella", album_id: goingBlankAgain.id, genre: "shoegaze", user_id: ride.id})
  goingBlankAgain3 = Song.create({title: "Not Fazed", album_id: goingBlankAgain.id, genre: "shoegaze", user_id: ride.id})
  goingBlankAgain4 = Song.create({title: "Chrome Waves", album_id: goingBlankAgain.id, genre: "shoegaze", user_id: ride.id})
  goingBlankAgain5 = Song.create({title: "Mouse Traip", album_id: goingBlankAgain.id, genre: "shoegaze", user_id: ride.id})
  goingBlankAgain6 = Song.create({title: "Time Of her Time", album_id: goingBlankAgain.id, genre: "shoegaze", user_id: ride.id})
  goingBlankAgain7 = Song.create({title: "Cool Your Boots", album_id: goingBlankAgain.id, genre: "shoegaze", user_id: ride.id})
  goingBlankAgain8 = Song.create({title: "Making Judy Smile", album_id: goingBlankAgain.id, genre: "shoegaze", user_id: ride.id})
  goingBlankAgain9 = Song.create({title: "Time Machine", album_id: goingBlankAgain.id, genre: "shoegaze", user_id: ride.id})
  goingBlankAgain10 = Song.create({title: "OX4", album_id: goingBlankAgain.id, genre: "shoegaze", user_id: ride.id})

  thisIsNotASafePlace1 = Song.create({title: "R.I.D.E", album_id: thisIsNotASafePlace.id, genre: "shoegaze", user_id: ride.id})
  thisIsNotASafePlace2 = Song.create({title: "Future Love", album_id: thisIsNotASafePlace.id, genre: "shoegaze", user_id: ride.id})
  thisIsNotASafePlace3 = Song.create({title: "Repetition", album_id: thisIsNotASafePlace.id, genre: "shoegaze", user_id: ride.id})
  thisIsNotASafePlace4 = Song.create({title: "Kill Switch", album_id: thisIsNotASafePlace.id, genre: "shoegaze", user_id: ride.id})
  thisIsNotASafePlace5 = Song.create({title: "Clouds Of Saint Marie", album_id: thisIsNotASafePlace.id, genre: "shoegaze", user_id: ride.id})
  thisIsNotASafePlace6 = Song.create({title: "Eternal Recurrence", album_id: thisIsNotASafePlace.id, genre: "shoegaze", user_id: ride.id})
  thisIsNotASafePlace7 = Song.create({title: "Fifteen Minutes", album_id: thisIsNotASafePlace.id, genre: "shoegaze", user_id: ride.id})
  thisIsNotASafePlace8 = Song.create({title: "Jump Jet", album_id: thisIsNotASafePlace.id, genre: "shoegaze", user_id: ride.id})
  thisIsNotASafePlace9 = Song.create({title: "Dial Up", album_id: thisIsNotASafePlace.id, genre: "shoegaze", user_id: ride.id})
  thisIsNotASafePlace10 = Song.create({title: "End Game", album_id: thisIsNotASafePlace.id, genre: "shoegaze", user_id: ride.id})
  thisIsNotASafePlace11 = Song.create({title: "Shadows Behind The Sun", album_id: thisIsNotASafePlace.id, genre: "shoegaze", user_id: ride.id})
  thisIsNotASafePlace12 = Song.create({title: "In This Room", album_id: thisIsNotASafePlace.id, genre: "shoegaze", user_id: ride.id})


  #THE_JESUS_AND_MARY_CHAIN

  psychocandy1 = Song.create({title: "Just Like Honey", album_id: psychocandy.id, genre: "shoegaze", user_id: theJesusAndMaryChain.id})
  psychocandy2 = Song.create({title: "The Living End", album_id: psychocandy.id, genre: "shoegaze", user_id: theJesusAndMaryChain.id})
  psychocandy3 = Song.create({title: "Taste The Floor", album_id: psychocandy.id, genre: "shoegaze", user_id: theJesusAndMaryChain.id})
  psychocandy4 = Song.create({title: "The Hardest Walk", album_id: psychocandy.id, genre: "shoegaze", user_id: theJesusAndMaryChain.id})
  psychocandy5 = Song.create({title: "Cut Dead", album_id: psychocandy.id, genre: "shoegaze", user_id: theJesusAndMaryChain.id})
  psychocandy6 = Song.create({title: "In A Hole", album_id: psychocandy.id, genre: "shoegaze", user_id: theJesusAndMaryChain.id})
  psychocandy7 = Song.create({title: "Taste Of Cindy", album_id: psychocandy.id, genre: "shoegaze", user_id: theJesusAndMaryChain.id})
  psychocandy8 = Song.create({title: "Some Candy Talking", album_id: psychocandy.id, genre: "shoegaze", user_id: theJesusAndMaryChain.id})
  psychocandy8 = Song.create({title: "Never Understand", album_id: psychocandy.id, genre: "shoegaze", user_id: theJesusAndMaryChain.id})
  psychocandy9 = Song.create({title: "Inside Me", album_id: psychocandy.id, genre: "shoegaze", user_id: theJesusAndMaryChain.id})
  psychocandy10 = Song.create({title: "Sowing Seeds", album_id: psychocandy.id, genre: "shoegaze", user_id: theJesusAndMaryChain.id})
  psychocandy11 = Song.create({title: "My Little Underground", album_id: psychocandy.id, genre: "shoegaze", user_id: theJesusAndMaryChain.id})
  psychocandy12 = Song.create({title: "You Trip Me Up", album_id: psychocandy.id, genre: "shoegaze", user_id: theJesusAndMaryChain.id})
  psychocandy13 = Song.create({title: "Something's Wrong", album_id: psychocandy.id, genre: "shoegaze", user_id: theJesusAndMaryChain.id})
  psychocandy14 = Song.create({title: "It's So Hard", album_id: psychocandy.id, genre: "shoegaze", user_id: theJesusAndMaryChain.id})

  darklands1 = Song.create({title: "Darklands", album_id: darklands.id, genre: "shoegaze", user_id: theJesusAndMaryChain.id})
  darklands2 = Song.create({title: "Deep One Perfect Morning", album_id: darklands.id, genre: "shoegaze", user_id: theJesusAndMaryChain.id})
  darklands3 = Song.create({title: "Happy When It Rains", album_id: darklands.id, genre: "shoegaze", user_id: theJesusAndMaryChain.id})
  darklands4 = Song.create({title: "Down On Me", album_id: darklands.id, genre: "shoegaze", user_id: theJesusAndMaryChain.id})
  darklands5 = Song.create({title: "Nine Million Rainy Days", album_id: darklands.id, genre: "shoegaze", user_id: theJesusAndMaryChain.id})
  darklands6 = Song.create({title: "April Skies", album_id: darklands.id, genre: "shoegaze", user_id: theJesusAndMaryChain.id})
  darklands7 = Song.create({title: "Fall", album_id: darklands.id, genre: "shoegaze", user_id: theJesusAndMaryChain.id})
  darklands8 = Song.create({title: "Cherry Came Too", album_id: darklands.id, genre: "shoegaze", user_id: theJesusAndMaryChain.id})
  darklands9 = Song.create({title: "On The Wall", album_id: darklands.id, genre: "shoegaze", user_id: theJesusAndMaryChain.id})
  darklands10 = Song.create({title: "About You", album_id: darklands.id, genre: "shoegaze", user_id: theJesusAndMaryChain.id})


  #ALCEST

  souvenirsDunAutreMonde1 = Song.create({title: "Printemps Emeraude", album_id: souvenirsDunAutreMonde.id, genre: "Shoegaze/Post-Black Metal", user_id: alcest.id})
  souvenirsDunAutreMonde2 = Song.create({title: "Souvenirs D'un Autre Monde", album_id: souvenirsDunAutreMonde.id, genre: "Shoegaze/Post-Black Metal", user_id: alcest.id})
  souvenirsDunAutreMonde3 = Song.create({title: "Les Iris", album_id: souvenirsDunAutreMonde.id, genre: "Shoegaze/Post-Black Metal", user_id: alcest.id})
  souvenirsDunAutreMonde4 = Song.create({title: "Ciel Errant", album_id: souvenirsDunAutreMonde.id, genre: "Shoegaze/Post-Black Metal", user_id: alcest.id})
  souvenirsDunAutreMonde5 = Song.create({title: "Sur L'autre Rive Je T'attendrai", album_id: souvenirsDunAutreMonde.id, genre: "Shoegaze/Post-Black Metal", user_id: alcest.id})
  souvenirsDunAutreMonde6 = Song.create({title: "Tir Nan Og", album_id: souvenirsDunAutreMonde.id, genre: "Shoegaze/Post-Black Metal", user_id: alcest.id})

  LesVoyagesDeLame1 = Song.create({title: "Autre Temps", album_id: lesVoyagesDeLame.id, genre: "Shoegaze/Post-Black Metal", user_id: alcest.id})
  LesVoyagesDeLame2 = Song.create({title: "La Ou Naissent Les Couleurs Nouvelles", album_id: lesVoyagesDeLame.id, genre: "Shoegaze/Post-Black Metal", user_id: alcest.id})
  LesVoyagesDeLame3 = Song.create({title: "Les Voyages De L'Ame", album_id: lesVoyagesDeLame.id, genre: "Shoegaze/Post-Black Metal", user_id: alcest.id})
  LesVoyagesDeLame4 = Song.create({title: "Nous Sommes L'Emeraude", album_id: lesVoyagesDeLame.id, genre: "Shoegaze/Post-Black Metal", user_id: alcest.id})
  LesVoyagesDeLame5 = Song.create({title: "Beings Of Light", album_id: lesVoyagesDeLame.id, genre: "Shoegaze/Post-Black Metal", user_id: alcest.id})
  LesVoyagesDeLame6 = Song.create({title: "Faiseurs De Mondes", album_id: lesVoyagesDeLame.id, genre: "Shoegaze/Post-Black Metal", user_id: alcest.id})
  LesVoyagesDeLame7 = Song.create({title: "Havens", album_id: lesVoyagesDeLame.id, genre: "Shoegaze/Post-Black Metal", user_id: alcest.id})
  LesVoyagesDeLame8 = Song.create({title: "Summer's Glory", album_id: lesVoyagesDeLame.id, genre: "Shoegaze/Post-Black Metal", user_id: alcest.id})

  shelter1 = Song.create({title: "Wings", album_id: shelter.id, genre: "Shoegaze/Post-Black Metal", user_id: alcest.id})
  shelter2 = Song.create({title: "Opale", album_id: shelter.id, genre: "Shoegaze/Post-Black Metal", user_id: alcest.id})
  shelter3 = Song.create({title: "La Nuit Marche Avec Moi", album_id: shelter.id, genre: "Shoegaze/Post-Black Metal", user_id: alcest.id})
  shelter4 = Song.create({title: "Voix Sereines", album_id: shelter.id, genre: "Shoegaze/Post-Black Metal", user_id: alcest.id})
  shelter5 = Song.create({title: "L'Eveil Des Muses", album_id: shelter.id, genre: "Shoegaze/Post-Black Metal", user_id: alcest.id})
  shelter6 = Song.create({title: "Shelter", album_id: shelter.id, genre: "Shoegaze/Post-Black Metal", user_id: alcest.id})
  shelter7 = Song.create({title: "Away", album_id: shelter.id, genre: "Shoegaze/Post-Black Metal", user_id: alcest.id})
  shelter8 = Song.create({title: "Delivrance", album_id: shelter.id, genre: "Shoegaze/Post-Black Metal", user_id: alcest.id})

  spiritualInstinct1 = Song.create({title: "Les Jardins De Minuit", album_id: spiritualInstinct.id, genre: "Shoegaze/Post-Black Metal", user_id: alcest.id})
  spiritualInstinct2 = Song.create({title: "Protection", album_id: spiritualInstinct.id, genre: "Shoegaze/Post-Black Metal", user_id: alcest.id})
  spiritualInstinct3 = Song.create({title: "Sapphire", album_id: spiritualInstinct.id, genre: "Shoegaze/Post-Black Metal", user_id: alcest.id})
  spiritualInstinct4 = Song.create({title: "L'ile Des Morts", album_id: spiritualInstinct.id, genre: "Shoegaze/Post-Black Metal", user_id: alcest.id})
  spiritualInstinct5 = Song.create({title: "Le Miroir", album_id: spiritualInstinct.id, genre: "Shoegaze/Post-Black Metal", user_id: alcest.id})
  spiritualInstinct6 = Song.create({title: "Spiritual Instinct", album_id: spiritualInstinct.id, genre: "Shoegaze/Post-Black Metal", user_id: alcest.id})


  #NOTHING

  GuiltyOfEverything1 = Song.create({title: "Hymn To The Pillory", album_id: guiltyOfEverything.id, genre: "Shoegaze/Nugaze", user_id: nothing.id})
  GuiltyOfEverything2 = Song.create({title: "Dig", album_id: guiltyOfEverything.id, genre: "Shoegaze/Nugaze", user_id: nothing.id})
  GuiltyOfEverything3 = Song.create({title: "Bent Nail", album_id: guiltyOfEverything.id, genre: "Shoegaze/Nugaze", user_id: nothing.id})
  GuiltyOfEverything4 = Song.create({title: "Endlessly", album_id: guiltyOfEverything.id, genre: "Shoegaze/Nugaze", user_id: nothing.id})
  GuiltyOfEverything5 = Song.create({title: "Somersault", album_id: guiltyOfEverything.id, genre: "Shoegaze/Nugaze", user_id: nothing.id})
  GuiltyOfEverything6 = Song.create({title: "Get Well", album_id: guiltyOfEverything.id, genre: "Shoegaze/Nugaze", user_id: nothing.id})
  GuiltyOfEverything7 = Song.create({title: "Beat Around The Bush", album_id: guiltyOfEverything.id, genre: "Shoegaze/Nugaze", user_id: nothing.id})
  GuiltyOfEverything8 = Song.create({title: "B&E", album_id: guiltyOfEverything.id, genre: "Shoegaze/Nugaze", user_id: nothing.id})
  GuiltyOfEverything9 = Song.create({title: "Guilty Of Everything", album_id: guiltyOfEverything.id, genre: "Shoegaze/Nugaze", user_id: nothing.id})

  tiredOfTomorrow1 = Song.create({title: "Fever Queen", album_id: tiredOfTomorrow.id, genre: "Shoegaze/Nugaze", user_id: nothing.id})
  tiredOfTomorrow2 = Song.create({title: "The Dead Are Dumb", album_id: tiredOfTomorrow.id, genre: "Shoegaze/Nugaze", user_id: nothing.id})
  tiredOfTomorrow3 = Song.create({title: "Vertigo Flowers", album_id: tiredOfTomorrow.id, genre: "Shoegaze/Nugaze", user_id: nothing.id})
  tiredOfTomorrow4 = Song.create({title: "ACD (Abcessive Compulsive Disorder)", album_id: tiredOfTomorrow.id, genre: "Shoegaze/Nugaze", user_id: nothing.id})
  tiredOfTomorrow5 = Song.create({title: "Nineteen Ninety Heaven", album_id: tiredOfTomorrow.id, genre: "Shoegaze/Nugaze", user_id: nothing.id})
  tiredOfTomorrow6 = Song.create({title: "Curse Of The Sun", album_id: tiredOfTomorrow.id, genre: "Shoegaze/Nugaze", user_id: nothing.id})
  tiredOfTomorrow7 = Song.create({title: "Eaten By Worms", album_id: tiredOfTomorrow.id, genre: "Shoegaze/Nugaze", user_id: nothing.id})
  tiredOfTomorrow8 = Song.create({title: "Everyone Is Happy", album_id: tiredOfTomorrow.id, genre: "Shoegaze/Nugaze", user_id: nothing.id})
  tiredOfTomorrow9 = Song.create({title: "Our Plague", album_id: tiredOfTomorrow.id, genre: "Shoegaze/Nugaze", user_id: nothing.id})
  tiredOfTomorrow10 = Song.create({title: "Tired Of Tomorrow", album_id: tiredOfTomorrow.id, genre: "Shoegaze/Nugaze", user_id: nothing.id})

  #THE_RAVEONETTES

  lustLustLust1 = Song.create({title: "Aly, Walk With Me", album_id: lustLustLust.id, genre: "Shoegaze", user_id: theRaveonettes.id})
  lustLustLust2 = Song.create({title: "Hallucinations", album_id: lustLustLust.id, genre: "Shoegaze", user_id: theRaveonettes.id})
  lustLustLust3 = Song.create({title: "Lust", album_id: lustLustLust.id, genre: "Shoegaze", user_id: theRaveonettes.id})
  lustLustLust4 = Song.create({title: "Dead Sound", album_id: lustLustLust.id, genre: "Shoegaze", user_id: theRaveonettes.id})
  lustLustLust5 = Song.create({title: "Black Satin", album_id: lustLustLust.id, genre: "Shoegaze", user_id: theRaveonettes.id})
  lustLustLust6 = Song.create({title: "Blush", album_id: lustLustLust.id, genre: "Shoegaze", user_id: theRaveonettes.id})
  lustLustLust7 = Song.create({title: "Expelled From Love", album_id: lustLustLust.id, genre: "Shoegaze", user_id: theRaveonettes.id})
  lustLustLust8 = Song.create({title: "You Want The Candy", album_id: lustLustLust.id, genre: "Shoegaze", user_id: theRaveonettes.id})
  lustLustLust9 = Song.create({title: "Blitzed", album_id: lustLustLust.id, genre: "Shoegaze", user_id: theRaveonettes.id})
  lustLustLust10 = Song.create({title: "Sad Transmission", album_id: lustLustLust.id, genre: "Shoegaze", user_id: theRaveonettes.id})
  lustLustLust11 = Song.create({title: "With My Eyes Closed", album_id: lustLustLust.id, genre: "Shoegaze", user_id: theRaveonettes.id})
  lustLustLust12 = Song.create({title: "The Beat Dies", album_id: lustLustLust.id, genre: "Shoegaze", user_id: theRaveonettes.id})

  peahi1 = Song.create({title: "Endless Sleeper", album_id: peahi.id, genre: "Shoegaze", user_id: theRaveonettes.id})
  peahi2 = Song.create({title: "Sisters", album_id: peahi.id, genre: "Shoegaze", user_id: theRaveonettes.id})
  peahi3 = Song.create({title: "Killer In The Streets", album_id: peahi.id, genre: "Shoegaze", user_id: theRaveonettes.id})
  peahi4 = Song.create({title: "Wake Me Up", album_id: peahi.id, genre: "Shoegaze", user_id: theRaveonettes.id})
  peahi5 = Song.create({title: "Z-Boys", album_id: peahi.id, genre: "Shoegaze", user_id: theRaveonettes.id})
  peahi6 = Song.create({title: "A Hell Below", album_id: peahi.id, genre: "Shoegaze", user_id: theRaveonettes.id})
  peahi7 = Song.create({title: "The Rains Of May", album_id: peahi.id, genre: "Shoegaze", user_id: theRaveonettes.id})
  peahi8 = Song.create({title: "Kill!", album_id: peahi.id, genre: "Shoegaze", user_id: theRaveonettes.id})
  peahi9 = Song.create({title: "When Night Is Almost Done", album_id: peahi.id, genre: "Shoegaze", user_id: theRaveonettes.id})
  peahi10 = Song.create({title: "Summer Ends", album_id: peahi.id, genre: "Shoegaze", user_id: theRaveonettes.id})


  #THE_BRIAN_JONESTOWN_MASSACRE

  methodrone1 = Song.create({title: "Evergreen", album_id: methodrone.id, genre: "Shoegaze", user_id: theBrianJonestownMassacre.id})
  methodrone2 = Song.create({title: "Wisdom", album_id: methodrone.id, genre: "Shoegaze", user_id: theBrianJonestownMassacre.id})
  methodrone3 = Song.create({title: "Crushed", album_id: methodrone.id, genre: "Shoegaze", user_id: theBrianJonestownMassacre.id})
  methodrone4 = Song.create({title: "That Girl Suicide", album_id: methodrone.id, genre: "Shoegaze", user_id: theBrianJonestownMassacre.id})
  methodrone5 = Song.create({title: "Wasted", album_id: methodrone.id, genre: "Shoegaze", user_id: theBrianJonestownMassacre.id})
  methodrone6 = Song.create({title: "Everyone Says", album_id: methodrone.id, genre: "Shoegaze", user_id: theBrianJonestownMassacre.id})
  methodrone7 = Song.create({title: "Short Wave", album_id: methodrone.id, genre: "Shoegaze", user_id: theBrianJonestownMassacre.id})
  methodrone8 = Song.create({title: "She Made Me", album_id: methodrone.id, genre: "Shoegaze", user_id: theBrianJonestownMassacre.id})
  methodrone9 = Song.create({title: "Hyperventilation", album_id: methodrone.id, genre: "Shoegaze", user_id: theBrianJonestownMassacre.id})
  methodrone10 = Song.create({title: "Records", album_id: methodrone.id, genre: "Shoegaze", user_id: theBrianJonestownMassacre.id})
  methodrone11 = Song.create({title: "I Love You", album_id: methodrone.id, genre: "Shoegaze", user_id: theBrianJonestownMassacre.id})
  methodrone12 = Song.create({title: "End Of The Day", album_id: methodrone.id, genre: "Shoegaze", user_id: theBrianJonestownMassacre.id})
  methodrone13 = Song.create({title: "Outback", album_id: methodrone.id, genre: "Shoegaze", user_id: theBrianJonestownMassacre.id})
  methodrone14 = Song.create({title: "She's Gone", album_id: methodrone.id, genre: "Shoegaze", user_id: theBrianJonestownMassacre.id})
  methodrone15 = Song.create({title: "Methodrone", album_id: methodrone.id, genre: "Shoegaze", user_id: theBrianJonestownMassacre.id})


  #THE_CURE

  disintegration1 = Song.create({title: "Plainsong", album_id: disintegration.id, genre: "Shoegaze", user_id: theCure.id})
  disintegration2 = Song.create({title: "Pictures Of You", album_id: disintegration.id, genre: "Shoegaze", user_id: theCure.id})
  disintegration3 = Song.create({title: "Closedown", album_id: disintegration.id, genre: "Shoegaze", user_id: theCure.id})
  disintegration4 = Song.create({title: "Lovesong", album_id: disintegration.id, genre: "Shoegaze", user_id: theCure.id})
  disintegration5 = Song.create({title: "Last Dance", album_id: disintegration.id, genre: "Shoegaze", user_id: theCure.id})
  disintegration6 = Song.create({title: "Lullaby", album_id: disintegration.id, genre: "Shoegaze", user_id: theCure.id})
  disintegration7 = Song.create({title: "Fascination Street", album_id: disintegration.id, genre: "Shoegaze", user_id: theCure.id})
  disintegration8 = Song.create({title: "Prayers For Rain", album_id: disintegration.id, genre: "Shoegaze", user_id: theCure.id})
  disintegration9 = Song.create({title: "The Same Deep Water As You", album_id: disintegration.id, genre: "Shoegaze", user_id: theCure.id})
  disintegration10 = Song.create({title: "Disintegration", album_id: disintegration.id, genre: "Shoegaze", user_id: theCure.id})
  disintegration11 = Song.create({title: "Homesick", album_id: disintegration.id, genre: "Shoegaze", user_id: theCure.id})
  disintegration12 = Song.create({title: "Untitled", album_id: disintegration.id, genre: "Shoegaze", user_id: theCure.id})


  #GALAXIE500

  today1 = Song.create({title: "Flowers", album_id: today.id, genre: "Shoegaze/Slowcore", user_id: galaxie500.id})
  today2 = Song.create({title: "Pictures", album_id: today.id, genre: "Shoegaze/Slowcore", user_id: galaxie500.id})
  today3 = Song.create({title: "Parking Lot", album_id: today.id, genre: "Shoegaze/Slowcore", user_id: galaxie500.id})
  today4 = Song.create({title: "Don't Let Our Youth Go To Waste", album_id: today.id, genre: "Shoegaze/Slowcore", user_id: galaxie500.id})
  today5 = Song.create({title: "Temperature's Rising", album_id: today.id, genre: "Shoegaze/Slowcore", user_id: galaxie500.id})
  today6 = Song.create({title: "Oblivious", album_id: today.id, genre: "Shoegaze/Slowcore", user_id: galaxie500.id})
  today7 = Song.create({title: "It's Getting Late", album_id: today.id, genre: "Shoegaze/Slowcore", user_id: galaxie500.id})
  today8 = Song.create({title: "Instrumental", album_id: today.id, genre: "Shoegaze/Slowcore", user_id: galaxie500.id})
  today9 = Song.create({title: "Tugboat", album_id: today.id, genre: "Shoegaze/Slowcore", user_id: galaxie500.id})


  #DEAFHEAVEN

  sunbather1 = Song.create({title: "Dream House", album_id: sunbather.id, genre: "Shoegaze/Black Metal", user_id: deafheaven.id})
  sunbather2 = Song.create({title: "Irresistible", album_id: sunbather.id, genre: "Shoegaze/Black Metal", user_id: deafheaven.id})
  sunbather3 = Song.create({title: "Sunbather", album_id: sunbather.id, genre: "Shoegaze/Black Metal", user_id: deafheaven.id})
  sunbather4 = Song.create({title: "Please Remember", album_id: sunbather.id, genre: "Shoegaze/Black Metal", user_id: deafheaven.id})
  sunbather5 = Song.create({title: "Vertigo", album_id: sunbather.id, genre: "Shoegaze/Black Metal", user_id: deafheaven.id})
  sunbather6 = Song.create({title: "Windows", album_id: sunbather.id, genre: "Shoegaze/Black Metal", user_id: deafheaven.id})
  sunbather7 = Song.create({title: "The Pecan Tree", album_id: sunbather.id, genre: "Shoegaze/Black Metal", user_id: deafheaven.id})


  #ELVIS_DEPRESSEDLY

  holoPleasures1 = Song.create({title: "okay", album_id: holoPleasures.id, genre: "Shoegaze", user_id: elvisDepressedly.id})
  holoPleasures2 = Song.create({title: "pepsi/coke suicide", album_id: holoPleasures.id, genre: "Shoegaze", user_id: elvisDepressedly.id})
  holoPleasures3 = Song.create({title: "inside you", album_id: holoPleasures.id, genre: "Shoegaze", user_id: elvisDepressedly.id})
  holoPleasures4 = Song.create({title: "teeth", album_id: holoPleasures.id, genre: "Shoegaze", user_id: elvisDepressedly.id})
  holoPleasures5 = Song.create({title: "weird honey", album_id: holoPleasures.id, genre: "Shoegaze", user_id: elvisDepressedly.id})
  holoPleasures6 = Song.create({title: "thinning out", album_id: holoPleasures.id, genre: "Shoegaze", user_id: elvisDepressedly.id})


  #CHAPTERHOUSE

  whirlpool1 = Song.create({title: "Breather", album_id: whirlpool.id, genre: "Shoegaze", user_id: chapterhouse.id})
  whirlpool2 = Song.create({title: "Pearl", album_id: whirlpool.id, genre: "Shoegaze", user_id: chapterhouse.id})
  whirlpool3 = Song.create({title: "Autosleeper", album_id: whirlpool.id, genre: "Shoegaze", user_id: chapterhouse.id})
  whirlpool4 = Song.create({title: "Treasure", album_id: whirlpool.id, genre: "Shoegaze", user_id: chapterhouse.id})
  whirlpool5 = Song.create({title: "Falling Down", album_id: whirlpool.id, genre: "Shoegaze", user_id: chapterhouse.id})
  whirlpool6 = Song.create({title: "April", album_id: whirlpool.id, genre: "Shoegaze", user_id: chapterhouse.id})
  whirlpool7 = Song.create({title: "Guilt", album_id: whirlpool.id, genre: "Shoegaze", user_id: chapterhouse.id})
  whirlpool8 = Song.create({title: "If You Want Me", album_id: whirlpool.id, genre: "Shoegaze", user_id: chapterhouse.id})
  whirlpool9 = Song.create({title: "Something More", album_id: whirlpool.id, genre: "Shoegaze", user_id: chapterhouse.id})


  #THE_RADIO_DEPT

  lesserMatters1 = Song.create({title: "Too Soon", album_id: lesserMatters.id, genre: "Shoegaze", user_id: theRadioDept.id})
  lesserMatters2 = Song.create({title: "Where Damage Isn't Already Done", album_id: lesserMatters.id, genre: "Shoegaze", user_id: theRadioDept.id})
  lesserMatters3 = Song.create({title: "Keen On Boys", album_id: lesserMatters.id, genre: "Shoegaze", user_id: theRadioDept.id})
  lesserMatters4 = Song.create({title: "Why Won't You Talk About It", album_id: lesserMatters.id, genre: "Shoegaze", user_id: theRadioDept.id})
  lesserMatters5 = Song.create({title: "It's Been Eight Yeers", album_id: lesserMatters.id, genre: "Shoegaze", user_id: theRadioDept.id})
  lesserMatters6 = Song.create({title: "Bus", album_id: lesserMatters.id, genre: "Shoegaze", user_id: theRadioDept.id})
  lesserMatters7 = Song.create({title: "Slottet #2", album_id: lesserMatters.id, genre: "Shoegaze", user_id: theRadioDept.id})
  lesserMatters8 = Song.create({title: "1995", album_id: lesserMatters.id, genre: "Shoegaze", user_id: theRadioDept.id})
  lesserMatters9 = Song.create({title: "Against The Tide", album_id: lesserMatters.id, genre: "Shoegaze", user_id: theRadioDept.id})
  lesserMatters10 = Song.create({title: "Strange Things Will Happen", album_id: lesserMatters.id, genre: "Shoegaze", user_id: theRadioDept.id})
  lesserMatters11 = Song.create({title: "Your Father", album_id: lesserMatters.id, genre: "Shoegaze", user_id: theRadioDept.id})
  lesserMatters12 = Song.create({title: "Ewan", album_id: lesserMatters.id, genre: "Shoegaze", user_id: theRadioDept.id})
  lesserMatters13 = Song.create({title: "Lost And Found", album_id: lesserMatters.id, genre: "Shoegaze", user_id: theRadioDept.id})


  #PALE_SAINTS

  theComfortsOfMadness1 = Song.create({title: "Way The World Is", album_id: theComfortsOfMadness.id, genre: "Shoegaze", user_id: paleSaints.id})
  theComfortsOfMadness2 = Song.create({title: "You Tear The World In Two", album_id: theComfortsOfMadness.id, genre: "Shoegaze", user_id: paleSaints.id})
  theComfortsOfMadness3 = Song.create({title: "Sea Of Sound", album_id: theComfortsOfMadness.id, genre: "Shoegaze", user_id: paleSaints.id})
  theComfortsOfMadness4 = Song.create({title: "True Coming Dream", album_id: theComfortsOfMadness.id, genre: "Shoegaze", user_id: paleSaints.id})
  theComfortsOfMadness5 = Song.create({title: "Little Hammer", album_id: theComfortsOfMadness.id, genre: "Shoegaze", user_id: paleSaints.id})
  theComfortsOfMadness6 = Song.create({title: "Insubstantial", album_id: theComfortsOfMadness.id, genre: "Shoegaze", user_id: paleSaints.id})
  theComfortsOfMadness7 = Song.create({title: "A Deep Sleep For Steven", album_id: theComfortsOfMadness.id, genre: "Shoegaze", user_id: paleSaints.id})
  theComfortsOfMadness8 = Song.create({title: "Language Of Flowers", album_id: theComfortsOfMadness.id, genre: "Shoegaze", user_id: paleSaints.id})
  theComfortsOfMadness9 = Song.create({title: "Fell From The Sun", album_id: theComfortsOfMadness.id, genre: "Shoegaze", user_id: paleSaints.id})
  theComfortsOfMadness10 = Song.create({title: "Sight Of You", album_id: theComfortsOfMadness.id, genre: "Shoegaze", user_id: paleSaints.id})
  theComfortsOfMadness11 = Song.create({title: "Time Thief", album_id: theComfortsOfMadness.id, genre: "Shoegaze", user_id: paleSaints.id})


  #SPIRITUALIZED

  ladiesAndGentlemenWeAreFloatingInSpace1 = Song.create({title: "Ladies And Gentlemen We Are Floating In Space(I Can't Help Falling In Love)", album_id: ladiesAndGentlemenWeAreFloatingInSpace.id, genre: "Shoegaze", user_id: spiritualized.id})
  ladiesAndGentlemenWeAreFloatingInSpace2 = Song.create({title: "Come Together", album_id: ladiesAndGentlemenWeAreFloatingInSpace.id, genre: "Shoegaze", user_id: spiritualized.id})
  ladiesAndGentlemenWeAreFloatingInSpace3 = Song.create({title: "I Think I'm In Love", album_id: ladiesAndGentlemenWeAreFloatingInSpace.id, genre: "Shoegaze", user_id: spiritualized.id})
  ladiesAndGentlemenWeAreFloatingInSpace4 = Song.create({title: "All Of My Thoughts", album_id: ladiesAndGentlemenWeAreFloatingInSpace.id, genre: "Shoegaze", user_id: spiritualized.id})
  ladiesAndGentlemenWeAreFloatingInSpace5 = Song.create({title: "Stay With Me", album_id: ladiesAndGentlemenWeAreFloatingInSpace.id, genre: "Shoegaze", user_id: spiritualized.id})
  ladiesAndGentlemenWeAreFloatingInSpace6 = Song.create({title: "Electricity", album_id: ladiesAndGentlemenWeAreFloatingInSpace.id, genre: "Shoegaze", user_id: spiritualized.id})
  ladiesAndGentlemenWeAreFloatingInSpace7 = Song.create({title: "Home Of The Brave", album_id: ladiesAndGentlemenWeAreFloatingInSpace.id, genre: "Shoegaze", user_id: spiritualized.id})
  ladiesAndGentlemenWeAreFloatingInSpace8 = Song.create({title: "The Individual", album_id: ladiesAndGentlemenWeAreFloatingInSpace.id, genre: "Shoegaze", user_id: spiritualized.id})
  ladiesAndGentlemenWeAreFloatingInSpace9 = Song.create({title: "Broken Heart", album_id: ladiesAndGentlemenWeAreFloatingInSpace.id, genre: "Shoegaze", user_id: spiritualized.id})
  ladiesAndGentlemenWeAreFloatingInSpace10 = Song.create({title: "No God Only Religion", album_id: ladiesAndGentlemenWeAreFloatingInSpace.id, genre: "Shoegaze", user_id: spiritualized.id})
  ladiesAndGentlemenWeAreFloatingInSpace11 = Song.create({title: "Cool Waves", album_id: ladiesAndGentlemenWeAreFloatingInSpace.id, genre: "Shoegaze", user_id: spiritualized.id})
  ladiesAndGentlemenWeAreFloatingInSpace12 = Song.create({title: "Cop Shoot Cop...", album_id: ladiesAndGentlemenWeAreFloatingInSpace.id, genre: "Shoegaze", user_id: spiritualized.id})

  lazerGuidedMelodies1 = Song.create({title: "You Know It's True", album_id: lazerGuidedMelodies.id, genre: "Shoegaze", user_id: spiritualized.id})
  lazerGuidedMelodies2 = Song.create({title: "If I Were With Her Now", album_id: lazerGuidedMelodies.id, genre: "Shoegaze", user_id: spiritualized.id})
  lazerGuidedMelodies3 = Song.create({title: "I Want You", album_id: lazerGuidedMelodies.id, genre: "Shoegaze", user_id: spiritualized.id})
  lazerGuidedMelodies4 = Song.create({title: "Run", album_id: lazerGuidedMelodies.id, genre: "Shoegaze", user_id: spiritualized.id})
  lazerGuidedMelodies5 = Song.create({title: "Smiles", album_id: lazerGuidedMelodies.id, genre: "Shoegaze", user_id: spiritualized.id})
  lazerGuidedMelodies6 = Song.create({title: "Step Into The Breeze", album_id: lazerGuidedMelodies.id, genre: "Shoegaze", user_id: spiritualized.id})
  lazerGuidedMelodies7 = Song.create({title: "Symphony Space", album_id: lazerGuidedMelodies.id, genre: "Shoegaze", user_id: spiritualized.id})
  lazerGuidedMelodies8 = Song.create({title: "Take Your Time", album_id: lazerGuidedMelodies.id, genre: "Shoegaze", user_id: spiritualized.id})
  lazerGuidedMelodies9 = Song.create({title: "Shine A Light", album_id: lazerGuidedMelodies.id, genre: "Shoegaze", user_id: spiritualized.id})
  lazerGuidedMelodies10 = Song.create({title: "Angel Sigh", album_id: lazerGuidedMelodies.id, genre: "Shoegaze", user_id: spiritualized.id})
  lazerGuidedMelodies11 = Song.create({title: "Sway", album_id: lazerGuidedMelodies.id, genre: "Shoegaze", user_id: spiritualized.id})
  lazerGuidedMelodies12 = Song.create({title: "200 Bars", album_id: lazerGuidedMelodies.id, genre: "Shoegaze", user_id: spiritualized.id})

  #HATCHIE

  keepsake1 = Song.create({title: "Not That Kind", album_id: keepsake.id, genre: "Shoegaze", user_id: hatchie.id})
  keepsake2 = Song.create({title: "Without A Blush", album_id: keepsake.id, genre: "Shoegaze", user_id: hatchie.id})
  keepsake3 = Song.create({title: "Her Own Heart", album_id: keepsake.id, genre: "Shoegaze", user_id: hatchie.id})
  keepsake4 = Song.create({title: "Obsessed", album_id: keepsake.id, genre: "Shoegaze", user_id: hatchie.id})
  keepsake5 = Song.create({title: "Unwanted Guest", album_id: keepsake.id, genre: "Shoegaze", user_id: hatchie.id})
  keepsake6 = Song.create({title: "Secret", album_id: keepsake.id, genre: "Shoegaze", user_id: hatchie.id})
  keepsake7 = Song.create({title: "Kiss The Stars", album_id: keepsake.id, genre: "Shoegaze", user_id: hatchie.id})
  keepsake8 = Song.create({title: "Stay With Me", album_id: keepsake.id, genre: "Shoegaze", user_id: hatchie.id})
  keepsake9 = Song.create({title: "When I Get Out", album_id: keepsake.id, genre: "Shoegaze", user_id: hatchie.id})
  keepsake10 = Song.create({title: "Keep", album_id: keepsake.id, genre: "Shoegaze", user_id: hatchie.id})

  #DIIV

  oshin1 = Song.create({title: "(Druun)", album_id: oshin.id, genre: "Shoegaze", user_id: diiv.id})
  oshin2 = Song.create({title: "Past Lives", album_id: oshin.id, genre: "Shoegaze", user_id: diiv.id})
  oshin3 = Song.create({title: "Human", album_id: oshin.id, genre: "Shoegaze", user_id: diiv.id})
  oshin4 = Song.create({title: "Air Conditioning", album_id: oshin.id, genre: "Shoegaze", user_id: diiv.id})
  oshin5 = Song.create({title: "How Long Have You Known?", album_id: oshin.id, genre: "Shoegaze", user_id: diiv.id})
  oshin6 = Song.create({title: "Wait", album_id: oshin.id, genre: "Shoegaze", user_id: diiv.id})
  oshin7 = Song.create({title: "Earthboy", album_id: oshin.id, genre: "Shoegaze", user_id: diiv.id})
  oshin8 = Song.create({title: "(Druun Pt.II)", album_id: oshin.id, genre: "Shoegaze", user_id: diiv.id})
  oshin9 = Song.create({title: "Follow", album_id: oshin.id, genre: "Shoegaze", user_id: diiv.id})
  oshin10 = Song.create({title: "Sometime", album_id: oshin.id, genre: "Shoegaze", user_id: diiv.id})
  oshin11 = Song.create({title: "Oshin (Subsume)", album_id: oshin.id, genre: "Shoegaze", user_id: diiv.id})
  oshin12 = Song.create({title: "Doused", album_id: oshin.id, genre: "Shoegaze", user_id: diiv.id})
  oshin13 = Song.create({title: "Home", album_id: oshin.id, genre: "Shoegaze", user_id: diiv.id})

  isTheIsAre1 = Song.create({title: "Out Of Mind", album_id: isTheIsAre.id, genre: "Shoegaze", user_id: diiv.id})
  isTheIsAre2 = Song.create({title: "Under The Sun", album_id: isTheIsAre.id, genre: "Shoegaze", user_id: diiv.id})
  isTheIsAre3 = Song.create({title: "Bent (Roi's Song)", album_id: isTheIsAre.id, genre: "Shoegaze", user_id: diiv.id})
  isTheIsAre4 = Song.create({title: "Dopamine", album_id: isTheIsAre.id, genre: "Shoegaze", user_id: diiv.id})
  isTheIsAre5 = Song.create({title: "Blue Boredom (Sky's Song)", album_id: isTheIsAre.id, genre: "Shoegaze", user_id: diiv.id})
  isTheIsAre6 = Song.create({title: "Valentine", album_id: isTheIsAre.id, genre: "Shoegaze", user_id: diiv.id})
  isTheIsAre7 = Song.create({title: "Yr Not Far", album_id: isTheIsAre.id, genre: "Shoegaze", user_id: diiv.id})
  isTheIsAre8 = Song.create({title: "Take Your Time", album_id: isTheIsAre.id, genre: "Shoegaze", user_id: diiv.id})
  isTheIsAre9 = Song.create({title: "Is The Is Are", album_id: isTheIsAre.id, genre: "Shoegaze", user_id: diiv.id})
  isTheIsAre10 = Song.create({title: "Mire (Grant's Song)", album_id: isTheIsAre.id, genre: "Shoegaze", user_id: diiv.id})
  isTheIsAre11 = Song.create({title: "Incarnate Devil", album_id: isTheIsAre.id, genre: "Shoegaze", user_id: diiv.id})
  isTheIsAre12 = Song.create({title: "(Fuck)", album_id: isTheIsAre.id, genre: "Shoegaze", user_id: diiv.id})
  isTheIsAre13 = Song.create({title: "Healthy Moon", album_id: isTheIsAre.id, genre: "Shoegaze", user_id: diiv.id})
  isTheIsAre14 = Song.create({title: "Loose Ends", album_id: isTheIsAre.id, genre: "Shoegaze", user_id: diiv.id})
  isTheIsAre15 = Song.create({title: "(Napa)", album_id: isTheIsAre.id, genre: "Shoegaze", user_id: diiv.id})
  isTheIsAre16 = Song.create({title: "Dust", album_id: isTheIsAre.id, genre: "Shoegaze", user_id: diiv.id})
  isTheIsAre17 = Song.create({title: "Waste Of Breath", album_id: isTheIsAre.id, genre: "Shoegaze", user_id: diiv.id})

  deceiver1 = Song.create({title: "Horsehead", album_id: deceiver.id, genre: "Shoegaze", user_id: diiv.id})
  deceiver2 = Song.create({title: "Like Before You Were Born", album_id: deceiver.id, genre: "Shoegaze", user_id: diiv.id})
  deceiver3 = Song.create({title: "Skin Game", album_id: deceiver.id, genre: "Shoegaze", user_id: diiv.id})
  deceiver4 = Song.create({title: "Between Tides", album_id: deceiver.id, genre: "Shoegaze", user_id: diiv.id})
  deceiver5 = Song.create({title: "Taker", album_id: deceiver.id, genre: "Shoegaze", user_id: diiv.id})
  deceiver6 = Song.create({title: "For The Guilty", album_id: deceiver.id, genre: "Shoegaze", user_id: diiv.id})
  deceiver7 = Song.create({title: "The Spark", album_id: deceiver.id, genre: "Shoegaze", user_id: diiv.id})
  deceiver8 = Song.create({title: "Lorelei", album_id: deceiver.id, genre: "Shoegaze", user_id: diiv.id})
  deceiver9 = Song.create({title: "Blankenship", album_id: deceiver.id, genre: "Shoegaze", user_id: diiv.id})
  deceiver10 = Song.create({title: "Acheron", album_id: deceiver.id, genre: "Shoegaze", user_id: diiv.id})


  #COCTEAU_TWINS

  treasure1 = Song.create({title: "Ivo", album_id: treasure.id, genre: "Shoegaze", user_id: cocteauTwins.id})
  treasure2 = Song.create({title: "Lorelei", album_id: treasure.id, genre: "Shoegaze", user_id: cocteauTwins.id})
  treasure3 = Song.create({title: "Beatrix", album_id: treasure.id, genre: "Shoegaze", user_id: cocteauTwins.id})
  treasure4 = Song.create({title: "Persephone", album_id: treasure.id, genre: "Shoegaze", user_id: cocteauTwins.id})
  treasure5 = Song.create({title: "Pandora (For Cindy)", album_id: treasure.id, genre: "Shoegaze", user_id: cocteauTwins.id})
  treasure6 = Song.create({title: "Amelia", album_id: treasure.id, genre: "Shoegaze", user_id: cocteauTwins.id})
  treasure7 = Song.create({title: "Aloysius", album_id: treasure.id, genre: "Shoegaze", user_id: cocteauTwins.id})
  treasure8 = Song.create({title: "Cicely", album_id: treasure.id, genre: "Shoegaze", user_id: cocteauTwins.id})
  treasure9 = Song.create({title: "Otterley", album_id: treasure.id, genre: "Shoegaze", user_id: cocteauTwins.id})
  treasure10 = Song.create({title: "Donimo", album_id: treasure.id, genre: "Shoegaze", user_id: cocteauTwins.id})

  heavenOrLasVegas1 = Song.create({title: "Cherry-Coloured Funk", album_id: heavenOrLasVegas.id, genre: "Shoegaze", user_id: cocteauTwins.id})
  heavenOrLasVegas2 = Song.create({title: "Pitch The Baby", album_id: heavenOrLasVegas.id, genre: "Shoegaze", user_id: cocteauTwins.id})
  heavenOrLasVegas3 = Song.create({title: "Iceblink Luck", album_id: heavenOrLasVegas.id, genre: "Shoegaze", user_id: cocteauTwins.id})
  heavenOrLasVegas4 = Song.create({title: "Fifty-Fifty Clown", album_id: heavenOrLasVegas.id, genre: "Shoegaze", user_id: cocteauTwins.id})
  heavenOrLasVegas5 = Song.create({title: "Heaven Or Las Vegas", album_id: heavenOrLasVegas.id, genre: "Shoegaze", user_id: cocteauTwins.id})
  heavenOrLasVegas6 = Song.create({title: "I Wear Your Ring", album_id: heavenOrLasVegas.id, genre: "Shoegaze", user_id: cocteauTwins.id})
  heavenOrLasVegas7 = Song.create({title: "Fotzepolitic", album_id: heavenOrLasVegas.id, genre: "Shoegaze", user_id: cocteauTwins.id})
  heavenOrLasVegas8 = Song.create({title: "Wolf In The Breast", album_id: heavenOrLasVegas.id, genre: "Shoegaze", user_id: cocteauTwins.id})
  heavenOrLasVegas9 = Song.create({title: "Road, River And Rail", album_id: heavenOrLasVegas.id, genre: "Shoegaze", user_id: cocteauTwins.id})
  heavenOrLasVegas10 = Song.create({title: "Frou-Frou Foxes In Midsummer Fires", album_id: heavenOrLasVegas.id, genre: "Shoegaze", user_id: cocteauTwins.id})

  
  #M83

  deadCitiesRedSeasAndLostGhosts1 = Song.create({title: "Birds", album_id: deadCitiesRedSeasAndLostGhosts.id, genre: "Shoegaze/Electronic", user_id: m83.id})
  deadCitiesRedSeasAndLostGhosts2 = Song.create({title: "Unrecorded", album_id: deadCitiesRedSeasAndLostGhosts.id, genre: "Shoegaze/Electronic", user_id: m83.id})
  deadCitiesRedSeasAndLostGhosts3 = Song.create({title: "Run Into Flowers", album_id: deadCitiesRedSeasAndLostGhosts.id, genre: "Shoegaze/Electronic", user_id: m83.id})
  deadCitiesRedSeasAndLostGhosts4 = Song.create({title: "In Church", album_id: deadCitiesRedSeasAndLostGhosts.id, genre: "Shoegaze/Electronic", user_id: m83.id})
  deadCitiesRedSeasAndLostGhosts5 = Song.create({title: "America", album_id: deadCitiesRedSeasAndLostGhosts.id, genre: "Shoegaze/Electronic", user_id: m83.id})
  deadCitiesRedSeasAndLostGhosts6 = Song.create({title: "On A White Lake, Near A Green Mountain", album_id: deadCitiesRedSeasAndLostGhosts.id, genre: "Shoegaze/Electronic", user_id: m83.id})
  deadCitiesRedSeasAndLostGhosts7 = Song.create({title: "Noise", album_id: deadCitiesRedSeasAndLostGhosts.id, genre: "Shoegaze/Electronic", user_id: m83.id})
  deadCitiesRedSeasAndLostGhosts8 = Song.create({title: "Be Wild", album_id: deadCitiesRedSeasAndLostGhosts.id, genre: "Shoegaze/Electronic", user_id: m83.id})
  deadCitiesRedSeasAndLostGhosts9 = Song.create({title: "Cybord", album_id: deadCitiesRedSeasAndLostGhosts.id, genre: "Shoegaze/Electronic", user_id: m83.id})
  deadCitiesRedSeasAndLostGhosts10 = Song.create({title: "0078h", album_id: deadCitiesRedSeasAndLostGhosts.id, genre: "Shoegaze/Electronic", user_id: m83.id})
  deadCitiesRedSeasAndLostGhosts11 = Song.create({title: "Gone", album_id: deadCitiesRedSeasAndLostGhosts.id, genre: "Shoegaze/Electronic", user_id: m83.id})
  deadCitiesRedSeasAndLostGhosts12 = Song.create({title: "Beauties Can Die", album_id: deadCitiesRedSeasAndLostGhosts.id, genre: "Shoegaze/Electronic", user_id: m83.id})


  #WESTKUST

  lastForever1 = Song.create({title: "Swirl", album_id: lastForever.id, genre: "Shoegaze", user_id: westkust.id})
  lastForever2 = Song.create({title: "Dishwasher", album_id: lastForever.id, genre: "Shoegaze", user_id: westkust.id})
  lastForever3 = Song.create({title: "Drown", album_id: lastForever.id, genre: "Shoegaze", user_id: westkust.id})
  lastForever4 = Song.create({title: "0700", album_id: lastForever.id, genre: "Shoegaze", user_id: westkust.id})
  lastForever5 = Song.create({title: "Weekends", album_id: lastForever.id, genre: "Shoegaze", user_id: westkust.id})
  lastForever6 = Song.create({title: "Easy", album_id: lastForever.id, genre: "Shoegaze", user_id: westkust.id})
  lastForever7 = Song.create({title: "Jonna", album_id: lastForever.id, genre: "Shoegaze", user_id: westkust.id})
  lastForever8 = Song.create({title: "Summer 3D", album_id: lastForever.id, genre: "Shoegaze", user_id: westkust.id})
  lastForever9 = Song.create({title: "Another Day", album_id: lastForever.id, genre: "Shoegaze", user_id: westkust.id})


  #LUSH

  split1 = Song.create({title: "Light From A Dead Star", album_id: split.id, genre: "Shoegaze", user_id: lush.id})
  split2 = Song.create({title: "Kiss Chase", album_id: split.id, genre: "Shoegaze", user_id: lush.id})
  split3 = Song.create({title: "Blackout", album_id: split.id, genre: "Shoegaze", user_id: lush.id})
  split4 = Song.create({title: "Hypocrite", album_id: split.id, genre: "Shoegaze", user_id: lush.id})
  split5 = Song.create({title: "Lovelife", album_id: split.id, genre: "Shoegaze", user_id: lush.id})
  split6 = Song.create({title: "Desire Lines", album_id: split.id, genre: "Shoegaze", user_id: lush.id})
  split7 = Song.create({title: "The Invisible Man", album_id: split.id, genre: "Shoegaze", user_id: lush.id})
  split8 = Song.create({title: "Undertow", album_id: split.id, genre: "Shoegaze", user_id: lush.id})
  split9 = Song.create({title: "Never-Never", album_id: split.id, genre: "Shoegaze", user_id: lush.id})
  split10 = Song.create({title: "Lit Up", album_id: split.id, genre: "Shoegaze", user_id: lush.id})
  split11 = Song.create({title: "Starlust", album_id: split.id, genre: "Shoegaze", user_id: lush.id})
  split12 = Song.create({title: "When I Die", album_id: split.id, genre: "Shoegaze", user_id: lush.id})


  #JEFRE_CANTU_LEDESMA

  onTheEchoingGreen1 = Song.create({title: "In A Copse", album_id: onTheEchoingGreen.id, genre: "Shoegaze", user_id: jefreCantuLedesma.id})
  onTheEchoingGreen2 = Song.create({title: "A Song Of Summer", album_id: onTheEchoingGreen.id, genre: "Shoegaze", user_id: jefreCantuLedesma.id})
  onTheEchoingGreen3 = Song.create({title: "Echoing Green", album_id: onTheEchoingGreen.id, genre: "Shoegaze", user_id: jefreCantuLedesma.id})
  onTheEchoingGreen4 = Song.create({title: "The Faun", album_id: onTheEchoingGreen.id, genre: "Shoegaze", user_id: jefreCantuLedesma.id})
  onTheEchoingGreen5 = Song.create({title: "Tenderness", album_id: onTheEchoingGreen.id, genre: "Shoegaze", user_id: jefreCantuLedesma.id})
  onTheEchoingGreen6 = Song.create({title: "Vulgar Latin", album_id: onTheEchoingGreen.id, genre: "Shoegaze", user_id: jefreCantuLedesma.id})
  onTheEchoingGreen7 = Song.create({title: "Autumn", album_id: onTheEchoingGreen.id, genre: "Shoegaze", user_id: jefreCantuLedesma.id})
  onTheEchoingGreen8 = Song.create({title: "Dancers At The Spring", album_id: onTheEchoingGreen.id, genre: "Shoegaze", user_id: jefreCantuLedesma.id})
  onTheEchoingGreen9 = Song.create({title: "Door To Night", album_id: onTheEchoingGreen.id, genre: "Shoegaze", user_id: jefreCantuLedesma.id})

  User.all.each_with_index do |artist, idx|
      file = open("http://slowcloud-dev.s3-us-west-1.amazonaws.com/users/artist#{idx}.jpg")
      artist.photo.attach(io: file, filename: "artist#{idx}.jpg")
  end

  Album.all.each_with_index do |album, idx|
    file = open("https://slowcloud-dev.s3-us-west-1.amazonaws.com/albums/album#{idx}.jpg")
    album.photo.attach(io: file, filename: "album#{idx}.jpg")
  end

  file = open("https://slowcloud-dev.s3-us-west-1.amazonaws.com/songs/song01.mp3")
  Song.all[101].audio_file.attach(io: file, filename: "song01.mp3")
  file = open("https://slowcloud-dev.s3-us-west-1.amazonaws.com/songs/song02.mp3")
  Song.all[102].audio_file.attach(io: file, filename: "song02.mp3")
  file = open("https://slowcloud-dev.s3-us-west-1.amazonaws.com/songs/song03.mp3")
  Song.all[103].audio_file.attach(io: file, filename: "song03.mp3")
  file = open("https://slowcloud-dev.s3-us-west-1.amazonaws.com/songs/song04.mp3")
  Song.all[104].audio_file.attach(io: file, filename: "song04.mp3")
  file = open("https://slowcloud-dev.s3-us-west-1.amazonaws.com/songs/song05.mp3")
  Song.all[105].audio_file.attach(io: file, filename: "song05.mp3")
  file = open("https://slowcloud-dev.s3-us-west-1.amazonaws.com/songs/song06.mp3")
  Song.all[106].audio_file.attach(io: file, filename: "song06.mp3")
  file = open("https://slowcloud-dev.s3-us-west-1.amazonaws.com/songs/song07.mp3")
  Song.all[107].audio_file.attach(io: file, filename: "song07.mp3")
  file = open("https://slowcloud-dev.s3-us-west-1.amazonaws.com/songs/song08.mp3")
  Song.all[108].audio_file.attach(io: file, filename: "song08.mp3")
  file = open("https://slowcloud-dev.s3-us-west-1.amazonaws.com/songs/song09.mp3")
  Song.all[109].audio_file.attach(io: file, filename: "song09.mp3")
  file = open("https://slowcloud-dev.s3-us-west-1.amazonaws.com/songs/song10.mp3")
  Song.all[110].audio_file.attach(io: file, filename: "song10.mp3")
  file = open("https://slowcloud-dev.s3-us-west-1.amazonaws.com/songs/song11.mp3")
  Song.all[111].audio_file.attach(io: file, filename: "song11.mp3")
  file = open("https://slowcloud-dev.s3-us-west-1.amazonaws.com/songs/song12.mp3")
  Song.all[112].audio_file.attach(io: file, filename: "song12.mp3")
  file = open("https://slowcloud-dev.s3-us-west-1.amazonaws.com/songs/song13.mp3")
  Song.all[113].audio_file.attach(io: file, filename: "song13.mp3")
  file = open("https://slowcloud-dev.s3-us-west-1.amazonaws.com/songs/song14.mp3")
  Song.all[114].audio_file.attach(io: file, filename: "song14.mp3")
end
# import the files with specific indices written out

