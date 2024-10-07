const mongoose = require("mongoose")

 const Banner2 = mongoose.Schema({
    body:String,
    text:String,
    image:String
 })

 module.exports = mongoose.model("banner2",Banner2)