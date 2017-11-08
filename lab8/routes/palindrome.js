const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("palindromes");
});

module.exports = router;