const authController = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt'); // Hash passwords
const jwt = require('jsonwebtoken'); 

// Register
authController.post('/register', async (req, res) => {
    try{
        const isExisting = await User.findOne({ email: req.body.email });
        if(isExisting){
            throw new Error('Email already exists');
        }

        // Hash Password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Create User
        const newUser = await User.create({ ...req.body, password: hashedPassword });

        const {password, ...userData} = newUser._doc;
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        return res.status(201).json({userData, token});

    } catch (error) {
        return res.status(500).json(error.message);
    }
});

// Login
authController.post('/login', async (req, res) => {
    try{
        const user = await User.findOne({ email: req.body.email }) 
        if(!user){
            throw new Error('Wrong credentials!')
        }

        const comparePass = await bcrypt.compare(req.body.password, user.password);
        if(!comparePass){
            throw new Error ('Incorrect password');
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        const { password, ...userData } = user._doc;

        return res.status(200).json({ userData, token });

    } catch (error){
        return res.status(500).json(error.message);
    }
})


module.exports = authController;