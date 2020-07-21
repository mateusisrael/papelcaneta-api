const router = require('express').Router();
const controllers = require('../controllers/controllers.js');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.get(
    '/movies',
    controllers.getData
)

router.post(
    '/movies',
    jsonParser,
    controllers.addMovie
)

router.delete(
    '/movies',
    controllers.delMovie
)

module.exports = router;
