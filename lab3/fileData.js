const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));

async function getFileAsString(path) {
    try {
        if(typeof path !== 'string') {
            throw `${path} is not a valid path!`;
        }
        return await fs.readFileAsync(path, "utf-8")
    } catch (error) {
        throw error;
    }
};

async function getFileAsJSON(path) {
    try {
        if(typeof(path) !== string) {
            throw `${path} is not a valid path!`;
        }
        const readFile = await fs.readFileAsync(path, "utf-8");
        return JSON.parse(readFile);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getFileAsString,
    getFileAsJSON
}