const express = require('express');
const router = express.Router();

// @route      GET api/contacts
// @desc       Get all users contacts 
// @access     Private
router.get('/', (req, res) => {
    res.send('Get all contacts')
});

// @route      POST api/contacts/:id
// @desc       Add new contact
// @access     Private
router.post('/:id', (req, res) => {
    res.send('Create a Contact')
});

// @route      PUT api/contacts/:id
// @desc       Update a contact
// @access     Private
router.put('/:id', (req, res) => {
    res.send('Update Contact')
});

// @route      POST api/contacts/:id
// @desc       Add new contact
// @access     Private
router.delete('/:id', (req, res) => {
    res.send('Delete Contact')
});

module.exports = router