const db = require('../models/db.js');

const getData = (req, res, next) => {
    res.send(JSON.stringify(db.data));
    console.log(db.data);
}

module.exports = {
    getData
};
