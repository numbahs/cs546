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
 * @param  {string} path the path to the file
 * @param  {string} text the text that is being saved.
 * @throws if the path is not a string.
 * @return {promise} if the function doesn't fail, it returns a promise that
 *                   resolves to true. 
 */
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

/**
 * @param  {string} path the path to the file
 * @param  {string} text the text that is being saved.
 * @throws if the path is not a string.
 * @return {promise} if the function doesn't fail, it returns a promise that
 *                   resolves to true.
 */
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