const mongoose = require('mongoose');



// Schemas
const MovieSchema = mongoose.Schema({
    name: String,
    year: Number
})
const Movie = mongoose.model('moovies', MovieSchema)



const findAll = async() => {
    const movies = await Movie.find((err, movies) => {
        if(err) return console.log(err);
        return movies;
    })

    return movies
}

const addMovie = async (movie) => {
    const newMovie = Movie({name: `${movie.name}`, year: `${movie.year}`})
    newMovie.save((err) => {
        if(err) return err;
    });
}


const removeMovie = async (movieId) => {
    await Movie.deleteOne({ "_id": `${movieId}` }, (err) => {
        if (err) {
            console.log("Errooooo", err);
            return err;
        };
    })

}

module.exports = {
    findAll,
    addMovie,
    removeMovie
}
