const models = require('../models/models');
const { model } = require('mongoose');


const getAllMovies = async() => {

    try{
        return await models.findAll();
    }catch(err) {
        return err;
    }
}


const addMovie = async(movie) => {
    try{
        await models.addMovie(movie)
    }catch(err) {
        return err;
    }
}


const delMovie = async(movieId) => {
    try {
        return await models.removeMovie(movieId)
    } catch (err) {
        return err
    }
}


module.exports = {
    getAllMovies,
    addMovie,
    delMovie
}