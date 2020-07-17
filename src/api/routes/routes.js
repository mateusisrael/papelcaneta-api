const router = require('express').Router();
const controllers = require('../controllers/controllers.js');

router.get(
    '/v1/todoflix/movies/',
    controllers.getData
)

module.exports = router;
