const propertyController = require('express').Router();
const Property = require('../models/Property');
const verifyToken = require('../middlewares/verifyToken'); 

// Get All Properties
propertyController.get('/getAll', async(req, res) => {
    try{
        const properties = await Property.find({});

        return res.status(200).json(properties);
    } catch (error) {
        return res.status(500).json(error.message)
    }
});

// Get Single Property
propertyController.get('/find/:id', async(req, res) => {
    try {
        const property = await Property.findById(req.params.id).populate('currentOwner', '-password')

        if(!property){
            throw new Error('No such property with that id')
        } else {
            return res.status(200).json(property);
        }
    } catch (error) {
        return res.status(500).json(error);
    }
});

// Create Property
propertyController.post('/', verifyToken, async (req, res) => {
    try {
        const newProperty = await Property.create({ ...req.body, currentOwner: req.user.id })

        return res.status(201).json(newProperty)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// Update Property
propertyController.put('/:id', verifyToken, async (req, res) => {
    try {
        const property = await Property.findById(req.params.id)
        if (property.owner !== req.user.id) {
            throw new Error("You are not allowed to update other people properties")
        }

        const updatedProperty = await Property.findByIdAndUpdate(
            req.params.id,
            {$set: req.body}, 
            {new: true}
        )

        return res.status(200).json(updatedProperty)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// Delete Property
propertyController.put('/:id', verifyToken, async (req, res) => {
    try {
        const property = await Property.findById(req.params.id)
        if (property.owner !== req.user.id) {
            throw new Error("You are not allowed to delete other people properties")
        }

        await property.delete()

        return res.status(200).json({msg: "Successfully deleted property"})
    } catch (error) {
        return res.status(500).json(error)
    }
})
