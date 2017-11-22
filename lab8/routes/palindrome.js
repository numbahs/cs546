var router = require('express').Router();

router.get('/', function (req, res) {
    res.render('palindromes');
});

module.exports = router;