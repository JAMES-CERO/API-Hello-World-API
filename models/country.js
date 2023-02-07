// require mongoose: 
const mongoose = require('mongoose')
const { Schema } = mongoose 

// schema:
const countrySchema = new Schema({
    name: { type: String },
    capital:  String,
    population:  Number,
    language: String
})


// model and export: 
const Country = mongoose.model('Country', countrySchema)
module.exports = Country
 