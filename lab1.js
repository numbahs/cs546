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
    } else if(!Number.isSafeInteger(cupCount) || cupCount < 0) {
        throw Error(`${cupCount} is not an acceptable number!`);
    }
    let responseText = '';
    for(let i = cupCount; i > 2; i --) {
        responseText += `${i} cups of coffe on the desk! ${i} cups of coffee! \n\
Pick one up, drink the cup, ${i} cup of coffee on the desk!\n`
    }
    return responseText + '2 cups of coffee on the desk! 2 cups of coffee! \n\
Pick one up, drink the cup, 1 cup of coffee on the desk!\n' + 
'1 cup of coffee on the desk! 1 cup of coffee! \n\
Pick it up, drink the cup, no more coffee left on the desk!\n'
}
/**
 * @param  {string} full
 * @param  {string} sub
 */
const occurancesOfSubstring = (full, sub) => {
    
}