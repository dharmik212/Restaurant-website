const mongoose = require("mongoose")

 const About = mongoose.Schema({
    text:String,
 })

 module.exports = mongoose.model("About",About)