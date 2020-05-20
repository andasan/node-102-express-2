const express = require('express');
const router = express.Router();
const uuid = require('uuid');

const members = require('../model/Members');

router.get('/', (req, res)=> {
    res.json(members);
});

module.exports = router