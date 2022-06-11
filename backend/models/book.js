const mongoose = require("mongoose");
const  {Schema} = mongoose;

const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    isbnNumber: {
        type: String,
        Required: true
    },
    about: {
        type: String,
    },
    pictures: [String],
    genre: {
        type: [String]
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "user"
    },
    city: String,
    borrowed: {
        type: Boolean,
        default: false
    },
    lendingLocation: {
        longitude: String,
        latitude: String,
        required: true
    },
    numberOfTimesBorrowed: {
        type: Number
    },
    lendingHistory: [{
        type: Schema.Types.ObjectId,
        ref: "lendinghistory"
    }]
})

module.exports = mongoose.model("Book", bookSchema);