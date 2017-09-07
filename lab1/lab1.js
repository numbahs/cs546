const sumOfSquares = (...args) => {
    if(args.length !== 3) {
        throw Error('Wrong argument count. There must be 3 arguments');
    } return args.reduce((accumulator, currNum) => {
        if(typeof(currNum) !== 'number') {
            throw TypeError(`Wrong argument type. ${currNum} is not a number.`);
        } return accumulator + currNum * currNum;
    }, 0);
} 

const sayHelloTo = (...args) => {
    const argLen = args.length;
    if(argLen < 1 || argLen > 3) {
        throw Error('There must be one to three arguments to this function.');
    } 
    args.forEach((curr) => {
        if(typeof(curr) !== 'string') {
            throw TypeError(`Wrong argument type. ${curr} is not a string`);
        }
    });
    const responseText = {
        1: `Hello, ${args[0]}!`,
        2: `Hello, ${args[0]} ${args[1]}. I hope you are having a good day!`,
        3: `Hello, ${args[2]} ${args[0]} ${args[1]}! Have a good evening!`
    };
    console.log(responseText[argLen]);
}
/**
 * @param  {number} cupCount
 */
const cupsOfCoffee = (cupCount) => {
    if(typeof(cupCount) !== 'number') {
        throw TypeError(`${cupCount} is not a number!`);
    } else if(!(Number.isSafeInteger(cupCount)) || cupCount < 0) {
        throw Error(`${cupCount} is not an acceptable number!`);
    }
    let responseText = '';
    for(let i = cupCount; i > 2; i --) {
        responseText += `${i} cups of coffee on the desk! ${i} cups of coffee! \n\
Pick one up, drink the cup, ${i - 1} cups of coffee on the desk!\n\n`
    }
    return responseText + '2 cups of coffee on the desk! 2 cups of coffee! \n\
Pick one up, drink the cup, 1 cup of coffee on the desk!\n\n' + 
'1 cup of coffee on the desk! 1 cup of coffee! \n\
Pick it up, drink the cup, no more coffee left on the desk!'
}
/**
 * @param  {string} full
 * @param  {string} sub
 */
const occurrencesOfSubstring = (full, sub) => {
    if(typeof(full) !== 'string' || typeof(sub) !== 'string') {
        throw TypeError("Both arguments should be strings when inputted.");
    }
    let expression = new RegExp(`(?=${sub})`, 'g');
    return (full.match(expression) || []).length;
}

const randomizeSentences = (paragraph) => {
    if(typeof(paragraph) !== 'string') {
        throw TypeError("The input to this function should be a paragraph!");
    }
    let sentences = paragraph.match(/[^\.!?]+[\.!?]/g),
        sentenceCount = sentences.length,
        currSentence, 
        rand;
    
    sentences[0] = ` ${sentences[0]}`;

    while(sentenceCount) {
        rand = Math.floor(Math.random() * sentenceCount--);
        currSentence = sentences[sentenceCount];
        sentences[sentenceCount] = sentences[rand];
        sentences[rand] = currSentence;
    }

    return (sentences.reduce((prev, curr) => prev + curr)).slice(1);
}