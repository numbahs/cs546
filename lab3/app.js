/*
 * @file app.js
 * @author: Albert Tang
 * I pledge my honor that I abided by the Stevens Honor System.
 */

const fse = require("fs-extra");

const {
    getFileAsString,
    getFileAsJSON,
    saveStringToFile,
    saveJSONToFile
} = require("./fileData");

const {
    simplify,
    createMetrics
} = require("./textMetrics");
let path = require('path');

async function main() {
    for(let i = 1; i < 4; ++i) {
        try {
            console.log(await getFileAsJSON(path.join(__dirname, `chapter${i}.result.json`)));
        } catch (error) {
            let chap = await getFileAsString(path.join(__dirname, `chapter${i}.txt`));
            await saveStringToFile(path.join(__dirname, `chapter${i}.debug.txt`), simplify(chap));
            let metricsChange = createMetrics(chap);
            await saveJSONToFile(path.join(__dirname, `chapter${i}.result.json`), metricsChange);
            console.log(metricsChange);
        }
    }
}

main().catch(err => console.error(err));