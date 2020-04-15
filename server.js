const express = require('express');
const mongoose = require('mongoose');
const dotEnv = require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;  

mongoose.connect(`mongodb://${process.env.USER}:${process.env.PASS}@ds139342.mlab.com:39342/jwt-auth-node-api`, {useNewUrlParser: true, useUnifiedTopology: true} , () => {
    console.log('Database Connected!!')
})


app.listen(port, () => {
    console.log(`Server is running at `, port);
})