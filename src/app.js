const express = require("express");
const hbs = require("hbs");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Detail = require("./models/Detail");
const Slider = require("./models/Slider");
const Menu = require("./models/Menu");
const Banner1 = require("./models/Banner1");
const Banner2 = require("./models/Banner2");
const Banner3 = require("./models/Banner3");
const About = require("./models/About");
const Gallery = require("./models/Gallery");

const routes = require("./routes/main");

//to get the form submitted
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/static", express.static("public"));
app.use("", routes);

//hbs config
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

//DB connection for online mongoDB atlas
require("dotenv").config();
async function startServer() {
  try {
    const dbUri = process.env.MONGODB_URI;
    await mongoose.connect(dbUri, {});
    console.log("Database connected successfully");

    //DB connection for local mongoDB
    // async function startServer() {
    //     try {
    //         await mongoose.connect("mongodb://localhost/website", {
    //         });
    //         console.log("Database connected successfully");

    // Gallery DB
    // Gallery.create([
    //   {
    //     image: "/static/images/gallery/g5.jpg",
    //   },
    //   {x``
    //     image: "/static/images/gallery/g6.jpg",
    //   },
    //   {
    //     image: "/static/images/gallery/g7.jpg",
    //   },
    //   {
    //     image: "/static/images/gallery/g8.jpg",
    //   },
    //   {
    //     image: "/static/images/gallery/g9.jpg",
    //   },
    //   {
    //     image: "/static/images/gallery/g1.jpg",
    //   },
    //   {
    //     image: "/static/images/gallery/g4.jpg",
    //   },
    //   {
    //     image: "/static/images/gallery/g2.jpg",
    //   },
    //   {
    //     image: "/static/images/gallery/g3.jpg",
    //   },
    // ]);

    // // About DB
    // About.create([
    //   {
    //     text: "Pizza Planet has been a cherished part of the Cleveland community since 2000, starting as a small, family-owned pizzeria. Over the years, we've grown into a local favorite, known for our delicious, handcrafted pizzas and a wide selection of sides, including fries, drinks, and sandwiches. Our commitment to using fresh, quality ingredients remains at the heart of everything we do, making every visit to Pizza Planet a memorable experience.",
    //   },
    // ]);

    // // Banner3 DB
    // Banner3.create([
    //   {
    //     body: "Take Away from Pizza Planet",
    //     text: "Savor the flavors of Pizza Planet from the comfort of your home with our convenient take-away service. Simply place your order, and we'll have your favorite pizzas and sides ready for a quick and easy pick-up, so you can enjoy a delicious meal wherever you are.",
    //     image: "/static/images/b2.jpg",
    //   },
    // ]);

    // // Banner2 DB
    // Banner2.create([
    //   {
    //     body: "Dine In at Pizza Planet",
    //     text: "Experience the warm and inviting atmosphere of Pizza Planet, where every meal is served with a side of genuine hospitality. Enjoy our freshly made pizzas and delicious sides in a cozy setting, perfect for family dinners or casual get-togethers.",
    //     image: "/static/images/b1.jpg",
    //   },
    // ]);

    // // Banner1 DB
    // Banner1.create([
    //   {
    //     body: "Pizza Planet Where Every Slice Takes You to a Galaxy of Flavor!",
    //     text: "Welcome to Pizza Planet, where our passion for great food goes beyond just pizza. Alongside our delicious, handcrafted pizzas, we offer a variety of mouth-watering sides, including crispy fries, refreshing drinks, and satisfying sandwiches. Whether you’re here for a quick bite or a full meal, we’re dedicated to making every visit a delightful experience.",
    //   },
    // ]);

    // //  Menu DB
    // Menu.create([
    //   {
    //     icon: "fa-solid fa-pizza-slice",
    //     title: "Classic Margherita Pizza",
    //     description:
    //       "Our Classic Margherita Pizza features creamy fresh mozzarella, aromatic basil, and a rich tomato sauce, all drizzled with extra virgin olive oil for a delightful burst of flavor.",
    //     price: "$13.00",
    //   },
    //   {
    //     icon: "fa-solid fa-burger",
    //     title: "Juicy Cheeseburger",
    //     description:
    //       "Savor our Juicy Cheeseburger, featuring a tender beef patty topped with melted cheddar cheese, crisp lettuce, ripe tomato, and a zesty pickle, all sandwiched in a freshly toasted bun.",
    //     price: "$11.99",
    //   },
    //   {
    //     icon: "fa-solid fa-martini-glass-empty",
    //     title: "Tropical Pineapple Ginger Ale",
    //     description:
    //       "Try our Tropical Pineapple Ginger Ale, a refreshing blend of crisp ginger ale with a hint of sweet pineapple and a splash of lime, served over ice for a unique and invigorating twist.",
    //     price: "$4.49",
    //   },
    // ]);

    // // Slider DB
    // Slider.create([
    //   {
    //     imageUrl: "/static/images/s2.jpg",
    //     class: "",
    //   },
    //   {
    //     imageUrl: "/static/images/s1.jpg",
    //     class: "active",
    //   },
    //   {
    //     imageUrl: "/static/images/s3.jpg",
    //     class: "",
    //   },
    // ]);
    // // ----------------------------------------------------------
    // // details DB
    // Detail.create({
    //   brandName: "Pizza Planet",
    //   brandIconLocation: "/static/images/bg.png",
    //   links: [
    //     { label: "Home", url: "/" },
    //     { label: "Menu", url: "/#menu_section" },
    //     {
    //       label: "Gallery",
    //       url: "/gallery",
    //     },
    //     {
    //       label: "About",
    //       url: "/#about_section",
    //     },
    //     {
    //       label: "Review Us",
    //       url: "/#review_us",
    //     },
    //   ],
    // });

    app.listen(process.env.PORT || 4000, () => {
      console.log("Server started on port", process.env.PORT || 4000);
    });
  } catch (err) {
    console.error(
      "Error connecting to the database or creating document:",
      err
    );
  }
}

startServer();
