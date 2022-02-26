const express = require('express');
const router = express.Router();
const { Contacts } = require('../db')
const {v4: uuidv4} = require('uuid');

router.get('/', async (req, res) => {
    try {
        const contacts = await Contacts.findAll();
        res.status(200).send(contacts);
    }catch (err) {
        res.send(err.message);
    }
})


router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const contacts = await Contacts.findByPk(id);
        res.status(200).send(contacts);
    }catch (err) {
        res.send(err.message);
    }
})

router.post('/', async (req, res) => {
    try{
        const { contactName, phoneNumber } = req.body;
        const contact = await Contacts.create({
            contactName: contactName,
            phoneNumber: phoneNumber
        })
        res.status(200).send(contact);
    }catch (err) {
        res.send(err.message)

    }
})

module.exports = router;