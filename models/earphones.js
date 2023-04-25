const mongoose = require("mongoose")
const earphonesSchema = mongoose.Schema({
    earphones_color: {type: String, minlength: 1, maxlength: 50},
    earphones_length: {type: String, minlength: 1, maxlength: 50},
    earphones_cost: {type: String, minlength: 10, maxlength: 1550},
    earphones_sound: {type: String, minlength: 1, maxlength: 50}
})
module.exports = mongoose.model("earphones", earphonesSchema)