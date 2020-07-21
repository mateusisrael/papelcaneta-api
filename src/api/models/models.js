const mongoose = require('mongoose');



// Schemas
const MovieSchema = mongoose.Schema({
    name: String,
    year: Number
})
const Movie = mongoose.model('movies', MovieSchema)



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
        return 'saved';
    });
}


const removeMovie = async (movieName) => {
    await Movie.deleteOne({ "name": `${movieName}` }, (err) => {
        if (err) return err;
        return 'removed'
    })

}

module.exports = {
    findAll,
    addMovie,
    removeMovie
}
