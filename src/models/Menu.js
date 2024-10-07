const mongoose = require("mongoose")

const Menu = mongoose.Schema({
    icon: String,
    title: String,
    description: String,
    price: String,
})

module.exports = mongoose.model("menu",Menu) 