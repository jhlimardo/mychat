const { Router } = require('express');
const users = require('./users')
const rooms = require('./rooms')
const contacts = require('./contacts')
const router = Router();

router.use('/users', users);
router.use('/rooms', rooms);
router.use('/contacts', contacts);

module.exports = router;