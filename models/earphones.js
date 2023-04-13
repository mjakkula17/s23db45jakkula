const mongoose = require("mongoose")
const earphonesSchema = mongoose.Schema({
earphones_color: String,
earphones_length: String,
earphones_cost: String,
earphones_sound: String
})
module.exports = mongoose.model("earphones", earphonesSchema)