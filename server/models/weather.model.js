const mongoose = require("mongoose");

const WeatherSchema = new mongoose.Schema({
    title: {type: String},
    location: { type: String }
}, { timestamps: true })

module.exports = mongoose.model('Weather', WeatherSchema);

