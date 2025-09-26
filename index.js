
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

const eventRoute = require('./routes/events');

require('dotenv').config();

const url = process.env.Mongo_DB_URL;

//middleware   
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL }));

//routes
app.use('/api/events', eventRoute)

//connect to database and start server
mongoose
    .connect(
        url
    )
    .then(() => {
        console.log("Connected to database!");
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    })
    .catch(() => {
        console.log("Connection failed!");
    });