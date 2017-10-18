const express = require('express');
const router = express.Router();
const {story} = require("../data/tempDB");

router.get('/', (req, res) => {
    res.json(story);
});

module.exports = router;