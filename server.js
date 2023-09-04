require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// const url = "mongodb://localhost:27017/ammantravels";

mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

app.use(express.json())

app.listen(3000, () => console.log('Server Started'))

