const { Router } = require('express');

const routes = Router();


const Film = mongoose.model('Film', { 
    title: String,
    descriction: String,
    image_url: String,
    trailer_url: String
 });


routes.post('/', async (req, res) => {
    const film = new Film ({
        title: req.body.title,
        descriction: req.body.descriction,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url
    });

    await film.save();

    return res.send(film);
});

routes.get('/', async (req, res) => {
    const films = await Film.find();
  return res.send(films);
});

routes.delete('/:id', async (req, res)=> {
    const film = await Film.findByIdAndDelete(req.params.id);
    return res.send(film);
});

routes.put('/:id', async (req, res) =>{
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


module.exports = routes;