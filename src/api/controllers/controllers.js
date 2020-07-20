const service = require('../services/services');

const getData = async(req, res, next) => {
    const movies = await service.getAllMovies()
    return res.send(await movies);

}

module.exports = {
    getData
}
