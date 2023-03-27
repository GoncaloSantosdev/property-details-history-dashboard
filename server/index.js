const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();
// Controllers
const authController = require('./controllers/authController');

// MongoDB connect
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL);

// Routes & middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authController);


// Starting Server
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`)); 