const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();

// MongoDB connect
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL);

// Starting Server
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`)); 