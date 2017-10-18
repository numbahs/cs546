const aboutRoute = require("./about");
const storyRoute = require("./story");
const educationRoute = require("./education");

const constructorMethod = (app) => {
    app.use("/about", aboutRoute);
    app.use("/story", storyRoute);
    app.use("/education", educationRoute);
    
    app.use("*", (req, res) => {
        res.status(404).json({error: "Route not found."});
    });
};

module.exports = constructorMethod;