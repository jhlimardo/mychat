const express = require('express');
const router = express.Router();
const { Users } = require('../db')
const {v4: uuidv4} = require('uuid');

router.get('/', async (req, res) => {
    try {
        const users = await Users.findAll();
        res.status(200).send(users);
    }catch (err) {
        res.send(err.message);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const users = await Users.findByPk(id);
        res.status(200).send(users);
    }catch (err) {
        res.send(err.message);
    }
})


router.post('/', async (req, res) => {
    try {
        const { name, lastName, phoneNumber} = req.body;

        const user = await Users.create({
            name: name,
            lastName: lastName,
            phoneNumber: phoneNumber
        })
        res.status(200).send(user);
    }catch (err) {
        res.send(err.message);
    }
})

module.exports = router;