const mongoose = require("mongoose")

// Faire le squelette de de city
const citySchema = new mongoose.Schema({
    department: Number,
    city: String,
    population: Number
});

module.exports = mongoose.model("user", citySchema)