const models = require('../models/models');


const getAllMovies = async() => {

    try{
        return await models.findAll();
        // return "teste"
    }catch(err) {
        return err;
    }
}

module.exports = {
    getAllMovies,
}