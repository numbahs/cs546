const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));

async function getFileAsString(path) {
    try {
        if(typeof path !== 'string') {
            throw `${path} is not a valid path!`;
        }
        return await fs.readFileAsync(path, "utf-8");
    } catch (error) {
        throw error;
    }
};

async function getFileAsJSON(path) {
    return JSON.parse(JSON.stringify(await getFileAsString(path)));
}

async function saveStringToFile(path, text) {
    try {
        if(typeof path !== 'string') {
            throw `${path} is not a valid path!`;
        }
        await fs.writeFileAsync(path, text);
        return true;
    } catch (error) {
        throw error;
    }
}

async function saveJSONToFile(path, obj) {
    try {
        if(typeof path !== 'string') {
            throw `${path} is not a valid path!`;
        }
        await fs.writeFileAsync(path, JSON.stringify(obj));
        return true;
    } catch (error) {
        throw error;
    }

}

module.exports = {
    getFileAsString,
    getFileAsJSON,
    saveStringToFile,
    saveJSONToFile
}