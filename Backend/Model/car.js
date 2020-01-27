const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let carSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    fuelType: {
        type: String,
        required: true
    },
    powerSteer: {
        type: String,
        required: true
    },
    breakSystem: {
        type: String,
        required: true
    },
    showroomPrice: {
        type: Number,
        required: true
    },
    onroadPrice: {
        type: Number,
        required: true
    },
    imgurl: {
        type: String,
        required: true
    },
    mileage: {
        type: Number,
        required: true
    },
    seatingCapacity: {
        type: Number,
        required: true
    },
    engineCapacity: {
        type: Number,
        required: true
    },
    gearType: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Car', carSchema);

















