const service = require('../services/services');

const getData = async(req, res, next) => {
    const movies = await service.getAllMovies()
    return res.send(await movies);
};

const addMovie = async(req, res, next) => {
    const newMovie = {
        name: `${await req.body.name}`,
        year: `${await req.body.year}`
    }
    try {
        await service.addMovie(newMovie)
        res.send('ok');
    } catch (error) {
        res.send(error);
    }
}

const delMovie = async (req, res, next) => {
    const movieName = req.query.movie_id
    console.log(movieName);
    try {
        service.delMovie(movieName).then((promiseRes) => res.send(promiseRes))
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getData,
    addMovie,
    delMovie
}
