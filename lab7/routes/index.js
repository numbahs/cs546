const recipesRoute = require("./recipes");
const commentsRoute = require("./comments");

const constructorMethod = (app) => {
    app.use('/recipes', recipesRoute);
    app.use('/comments', commentsRoute);

    app.use('*', (req, res) => {
        res.status(404).json({error: "Route not found."});
    })
}

module.exports = constructorMethod;