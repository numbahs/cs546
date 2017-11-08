const palindromeRoutes = require("./palindromes");

let constructorMethod = (app) => {
    app.use("/palindrome", palindromeRoutes);
};

module.exports = {
    palindrome: require("./palindrome"),
};