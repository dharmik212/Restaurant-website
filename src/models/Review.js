const mongoose = require("mongoose")

 const Review = mongoose.Schema({
    email:String,
    phone:String,
    query:String
 })

 module.exports = mongoose.model("review",Review)