//! show dbs 
//! use findMyRestaurant

db.restaurants.insertMany([
  {
    name: "Hope Restaurant",
    address: {
      city: "Tokyo",
      street: "Koenji Junio",
      coordinates: [20, -20],
    },
    cuisine: "Asian",
    kosher: true,
    reviews: [
      {
        date: new Date("2020-09-04"),
        score: 3,
      },
      {
        date: new Date("2021-09-03"),
        score: 5,
      },
      {
        date: new Date("2022-01-01"),
        score: 6,
      },
    ],
  },
  {
    name: "Yuki Food",
    address: {
      city: "Jerusalem",
      street: "Salah Al-Din",
      coordinates: [30.2,-20],
    },
    cuisine: "Indian",
    kosher: false,
    reviews: [
      {
        date: new Date("2018-06-04"),
        score: 5,
      },
      {
        date: new Date("2013-04-04"),
        score: 9,
      },
      {
        date: new Date("2020-01-01"),
        score: 4,
      },
    ],
  },
  {
    name: "Japanese Food",
    address: {
      city: "Jerusalem",
      street: "Salsh Al-Din",
      coordinates: [-40,-20],
    },
    cuisine: "Asian",
    kosher: true,
    reviews: [
      {
        date: new Date("2020-01-04"),
        score: 3,
      },
      {
        date: new Date("2018-01-05"),
        score: 8,
      },
      {
        date: new Date("2016-01-08"),
        score: 9,
      },
    ],
  },
  {
    name: "KFC",
    address: {
      city: "Tokyo",
      street: "Omoide Yokocho",
      coordinates: [20.46574, -40.6774],
    },
    cuisine: "Street Food",
    kosher: true,
    reviews: [
      {
        date: new Date("2017-01-01"),
        score: 10,
      },
      {
        date: new Date("2016-01-10"),
        score: 8,
      },
      {
        date: new Date("2019-01-07"),
        score: 6,
      },
    ],
  },
  {
    name: "Noodles",
    address: {
      city: "New york",
      street: "new york 12",
      coordinates: [20.46574, 10.6774],
    },
    cuisine: "Indian",
    kosher: false,
    reviews: [
      {
        date: new Date("2016-01-01"),
        score: 1,
      },
      {
        date: new Date("2019-01-20"),
        score: 6,
      },
      {
        date: new Date("2019-01-01"),
        score: 2,
      },
    ],
  },
]);

//! Filter
//! db.restaurants.find({cuisine: "Indian"})