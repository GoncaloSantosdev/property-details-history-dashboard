const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();
// Controllers
const authController = require('./controllers/authController');
const propertyController = require('./controllers/propertyController');
const uploadController = require('./controllers/uploadController');

// MongoDB connect
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL);

// Routes & middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static('public/images'))

app.use('/auth', authController);
app.use('/property', propertyController);
app.use('/upload', uploadController);


// Starting Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server has been started'));