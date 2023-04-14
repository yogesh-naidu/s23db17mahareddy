const mongoose = require("mongoose")
const giraffeSchema = mongoose.Schema({
    giraffe_name: String,
    giraffe_color: String,
    giraffe_weight: Number
})
module.exports = mongoose.model("giraffe",
giraffeSchema)