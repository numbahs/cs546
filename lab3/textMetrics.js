/**
 * @param  {string} text the text that must be simplified.
 * @throws {typeError} if the text inputted is not a string
 * @return {string} the simplified text.
 */
const simplify = (text) => {
    if(typeof(text) !== 'string') {
        throw typeError("Argument must be a string to be simplified!");
    }
    return text.toLowerCase()
        .replace(/[^0-9a-z\s]/g, '')
        .replace(/[\s]+/g, ' ');
}

/**
 * @param  {string} text the text that must be parsed for its metrics.
 * @throws {typeError} if the text inputted is not a string.
 * @return {Object} the metrics of the text.
 */
const createMetrics = (text) => {
    if(typeof(text) !== 'string') {
        throw typeError("Argument must be a string to be parsed!");
    }
    let letters = 0, wO = {};
    let simpleText = simplify(text),
        simpleTextList = simpleText.split(" ");
    simpleTextList.forEach((word) => {
        if(word !== '') {
            if(wO[word]) {
                wO[word] += 1;
            } else {
                wO[word] = 1;
            }
            letters += word.length;
        }
    });
    return {
        totalLetters: letters,
        totalWords: simpleTextList.length,
        uniqueWords: Object.keys(wO).length,
        longWords: simpleTextList.filter((word) => word.length >=6).length,
        averageWordLength: letters / simpleTextList.length,
        wordOccurances: wO
    };
}

module.exports = {
    simplify,
    createMetrics
}