const mongoose = require("mongoose")
const giraffeSchema = mongoose.Schema({
    giraffe_name: {
        type: String,
        required: true,
        unique: true,
        minLength: [7, "Name of the Giraffe is not correct"],
      },
    giraffe_color: {
        type: String,
        required: true,
        minLength: [2, "Color of the giraffe is not correct"],
      },
    giraffe_weight: {
        type: Number,
        required: true,
        min: [100, "Weight of the Giraffe is not correct"],
      }
})
module.exports = mongoose.model("giraffe",
giraffeSchema)