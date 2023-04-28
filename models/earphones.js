const mongoose = require("mongoose")
const earphonesSchema = mongoose.Schema({
    earphones_color: {type: String, min: 1, max: 50},
    earphones_length: {type: String, min: 1, maxl: 50},
    earphones_cost: {type: String, min: 1, max: 1550},
    earphones_sound: {type: String, min: 1, max: 50}
})
module.exports = mongoose.model("earphones", earphonesSchema)