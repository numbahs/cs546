const fs = require("fs-extra");

/**
 * @param  {string} path the path to the file
 * @throws if the path is not a string.
 * @return {promise} Reject if reading file fails. 
 */
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

/**
 * @param  {string} path the path to the file
 * @throws if the path is not a string.
 * @return {promise} Reject if reading file fails. 
 */
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

/**
 * @param  {string} path the path to the file.
 * @param  {string} text that text is being saved.
 * @throws {TypeError} if the path is not a string.
 * @throws {TypeError} if the text if not a string.
 * @return {promise} if the function doesn't fail, it returns a promise that
 *                   resolves to true. 
 */
async function saveStringToFile(path, text) {
    try {
        if(typeof(path) !== 'string') {
            throw `${path} is not a valid path!`;
        }
        if(typeof(text) !== 'string') {
            throw TypeError(`${text} is no a valid object!`);
        }
        await fs.writeFile(path, text);
        return true;
    } catch (error) {
        throw error;
    }
}

/**
 * @param  {string} path the path to the file
 * @param  {string} obj the object that is being saved.
 * @throws {TypeError} if the path is not a string.
 * @throws {TypeError} if the object if not an object.
 * @return {promise} if the function doesn't fail, it returns a promise that
 *                   resolves to true.
 */
async function saveJSONToFile(path, obj) {
    try {
        if(typeof(path) !== 'string') {
            throw TypeError(`${path} is not a valid path!`);
        }
        if(typeof(obj) !== 'object') {
            throw TypeError(`${obj} is no a valid object!`);
        }
        await fs.writeJSON(path, obj, { spaces: '\t'});
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