const moongose = require("mongoose")
const Detail = moongose.Schema({
    brandName: String,
    brandIconLocation: String,
    links: [
        { 
            label: String,
            url: String
        }
    ]
})

module.exports = moongose.model("details", Detail)