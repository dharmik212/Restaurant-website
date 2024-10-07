const mongoose = require("mongoose")

 const Banner1 = mongoose.Schema({
    body:String,
    text:String
 })

 module.exports = mongoose.model("banner1",Banner1)