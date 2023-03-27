const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    currentOwner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    
    propertyId: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    images: [{
        type: String,
        required: true
    }],

    type: {
        type: String,
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

    garages: {
        type: Number,
        required: true
    },

    sqft_1: {
        type: Number,
        required: true
    },

    sqft_2: {
        type: Number,
        required: true
    },

    forSale: {
        type: Boolean,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    tax: {
        type: Number,
        required: true
    },

    propertyType: {
        type: String,
        required: true
    },

    buildingAge: {
        type: Number,
        required: true
    },

    size: {
        type: Number,
        required: true
    },

    parking: {
        type: String,
        required: true
    },

    basement: {
        type: Boolean,
        required: true
    },

    possesion: {
        type: Number,
        required: true
    },

    completeDescription: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
}, {timestamps: true});

module.exports = mongoose.model('Property', PropertySchema);

