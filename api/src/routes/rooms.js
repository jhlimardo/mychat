const express = require('express');
const router = express.Router();
const { Rooms } = require('../db')
const {v4: uuidv4} = require('uuid');

router.get('/', async (req, res) => {
    try {
        const rooms = await Rooms.findAll();
        res.status(200).send(rooms);
    }catch (err) {
        res.send(err.message);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const rooms = await Rooms.findByPk(id);
        res.status(200).send(rooms);
    }catch (err) {
        res.send(err.message);
    }
})
router.post('/', async (req, res) => {
    try {
        const { roomName } = req.body;

        const room = await Rooms.create({
            roomName: roomName
        })
        res.status(200).send(room);
    }catch (err) {
        res.send(err.message);
    }
})

module.exports = router;