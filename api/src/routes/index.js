const { Router } = require('express');
const users = require('./users')
const rooms = require('./rooms')
const router = Router();

router.use('/users', users);
router.use('/rooms', rooms);

module.exports = router;