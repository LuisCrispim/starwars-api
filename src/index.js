const express = require('express');
const mongoose = require('mongoose');

const app = express()
const port = 3000
app.use(express.json());


app.listen(port, () => {
    mongoose.connect('mongodb+srv://luiscrispim:12345678910@starwars-api.yiylmyf.mongodb.net/?retryWrites=true&w=majority&appName=starwars-api');

  console.log(`Example app listening on port... ${port}`);
})

const Film = mongoose.model('Film', { 
    title: String,
    descriction: String,
    image_url: String,
    trailer_url: String
 });


app.post('/', async (req, res) => {
    const film = new Film ({
        title: req.body.title,
        descriction: req.body.descriction,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url
    });

    await film.save();

    return res.send(film);
});

app.get('/', async (req, res) => {
    const films = await Film.find();
  return res.send(films);
});

app.delete('/:id', async (req, res)=> {
    const film = await Film.findByIdAndDelete(req.params.id);
    return res.send(film);
});

app.put('/:id', async (req, res) =>{
    const film = await Film.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        descriction: req.body.descriction,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url
    }, {
        new: true
    });

    return res.send(film);
});


