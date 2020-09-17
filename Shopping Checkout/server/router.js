const controllers = require('./controller/controller');
const express = require('express');
const router = express.Router();

router.get('/', controllers.getAll);

router.post('/', controllers.post);

module.exports = router;