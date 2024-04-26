const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express()
const port = 3000
app.use(express.json());
app.use(routes);


app.listen(port, () => {
    mongoose.connect('mongodb+srv://luiscrispim:1234@starwars.hxwpqen.mongodb.net/?retryWrites=true&w=majority&appName=StarWars');

  console.log(`Example app listening on port... ${port}`);
})




