const models = require('../models/models');
const { model } = require('mongoose');


const getAllMovies = async() => {

    try{
        return await models.findAll();
        // return "teste"
    }catch(err) {
        return err;
    }
}


const addMovie = async(movie) => {

    try{
        await models.addMovie(movie);

    }catch(err) {
        return err;
    }
}


const delMovie = async(movieName) => {
    try {
        models.removeMovie(movieName).then(res => {return res})
    } catch (err) {
        return err
    }
}


module.exports = {
    getAllMovies,
    addMovie,
    delMovie
}