const palindromeRoutes = require("./palindrome");
const aboutRoutes = require("./about");

let constructorMethod = (app) => {
    app.use("/", palindromeRoutes);
    app.use("/about", aboutRoutes);

    app.use("*", (res, req) => {
        res.redirect("/about");
    })
};

module.exports = constructorMethod;