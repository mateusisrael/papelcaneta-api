const service = require('../services/services');

const getData = async(req, res, next) => {
    const movies = await service.getAllMovies()
    return res.send(movies);
};

const addMovie = async(req, res, next) => {
    const newMovie = {
        name: `${await req.body.name}`,
        year: `${await req.body.year}`
    }

    try {
        await service.addMovie(newMovie)
        res.send({"message": "new movie added"});
    } catch (error) {
        console.log(error);
        res.send({"message": "internal server error"})
    }
}

const delMovie = async (req, res, next) => {
    const movieId = req.query.movie_id
    console.log(movieId);
    try {
        await service.delMovie(movieId)
        res.send({"message": "removed"})
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getData,
    addMovie,
    delMovie
}
