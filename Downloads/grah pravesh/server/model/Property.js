const mongoose = require("mongoose")
const PropertySchema = new  mongoose.Schema({
    title: {
    type: String,
    required: true
},

description: {
    type: String,
    required: true
},

location: {
    type: String,
    required: true
},

city: {
    type: String,
    required: true
},

price: {
    type: Number,
    required: true
},

propertyType: {
    type: String,
    enum: ["Apartment", "Villa", "Hotel", "House", "Room"],
    required: true
},

maxGuests: {
    type: Number,
    required: true
},

bedrooms: {
    type: Number,
    required: true
},

bathrooms: {
    type: Number,
    required: true
},

images: [{
    type: String
}],

amenities: [{
    type: String
}],

host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
}
},{ timestamps: true })
const PropertyModel = mongoose.model("Property",PropertySchema)
module.exports = PropertyModel