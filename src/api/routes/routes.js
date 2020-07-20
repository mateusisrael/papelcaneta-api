const router = require('express').Router();
const controllers = require('../controllers/controllers.js');

router.get(
    '/movies',
    controllers.getData
)

module.exports = router;
