const fs = require("fs-extra");

async function getFileAsString(path) {
    try {
        if(typeof(path) !== 'string') {
            throw `${path} is not a valid path!`;
        }
        return await fs.readFile(path, "utf-8");
    } catch (error) {
        throw error;
    }
};

async function getFileAsJSON(path) {
    try {
        if(typeof(path) !== 'string') {
            throw `${path} is not a valid path!`;
        }
        return JSON.parse(await fs.readFile(path, "utf-8"));
    } catch (error) {
        throw error;
    }
}

async function saveStringToFile(path, text) {
    try {
        if(typeof(path) !== 'string') {
            throw `${path} is not a valid path!`;
        }
        await fs.writeFile(path, text);
        return true;
    } catch (error) {
        throw error;
    }
}

async function saveJSONToFile(path, obj) {
    try {
        if(typeof(path) !== 'string') {
            throw `${path} is not a valid path!`;
        }
        await fs.writeFile(path, JSON.stringify(obj, null, 4));
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