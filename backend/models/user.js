const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSChema = new Schema({
    name: String,
});

module.exports = mongoose.model("User", userSChema);