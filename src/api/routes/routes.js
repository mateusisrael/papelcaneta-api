const router = require('express').Router();
const controllers = require('../controllers/controllers.js');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.get(
    '/tasks',
    controllers.getData
)

router.post(
    '/tasks',
    jsonParser,
    controllers.addTask
)

router.delete(
    '/tasks',
    controllers.delTask
)

module.exports = router;
