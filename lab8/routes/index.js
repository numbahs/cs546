var palindromeRoutes = require('./palindrome');
var aboutRoutes = require('./about');

var constructorMethod = function constructorMethod(app) {
    app.use('/', palindromeRoutes);
    app.use('*', aboutRoutes);
};

module.exports = constructorMethod;