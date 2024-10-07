const mongoose = require("mongoose")

 const Banner3 = mongoose.Schema({
    body:String,
    text:String,
    image:String
 })

 module.exports = mongoose.model("banner3",Banner3)