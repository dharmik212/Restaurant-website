const express = require("express");
const { route } = require("express/lib/application");
const Detail = require("../models/Detail");
const Slider = require("../models/Slider");
const Menu = require("../models/Menu");
const Review = require("../models/Review");
const Banner1 = require("../models/Banner1");
const Banner2 = require("../models/Banner2");
const Banner3 = require("../models/Banner3");
const About = require("../models/About");
const Gallery = require("../models/Gallery");

const routes = express.Router();

routes.get("/", async (req, res) => {
  //DB connection id for online mongoDB atlas
  const details = await Detail.findOne({ _id: "66ca5a56074bb3a1a60345d3" });
  //const details = await Detail.findOne({"_id":"66c17cb099a4952c9d5abf6f"})
  const slides = await Slider.find();
  const menu = await Menu.find();
  const banner1 = await Banner1.find();
  const banner2 = await Banner2.find();
  const banner3 = await Banner3.find();
  const about = await About.find();

  res.render("index", {
    details: details,
    slides: slides,
    menu: menu,
    banner1: banner1,
    banner2: banner2,
    banner3: banner3,
    about: about,
  });
});

routes.get("/gallery", async (req, res) => {
  //DB connection id for online mongoDB atlas
  const details = await Detail.findOne({ _id: "66ca5a56074bb3a1a60345d3" });
  //const details = await Detail.findOne({"_id":"66c17cb099a4952c9d5abf6f"})
  const gallery = await Gallery.find();

  res.render("gallery", {
    details: details,
    gallery: gallery,
  });
});

routes.post("/process-review-form", async (request, response) => {
  console.log(request.body);
  //saving from to our DB
  try {
    const data = await Review.create(request.body);
    console.log(data);
    response.redirect("/");
  } catch (error) {
    response.redirect("/");
  }
});

module.exports = routes;
