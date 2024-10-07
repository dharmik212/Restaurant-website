const mongoose = require("mongoose")

 const Gallery = mongoose.Schema({
    image:String
 })

 module.exports = mongoose.model("gallery",Gallery)