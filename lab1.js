const sumOfSquares = (...args) => {
    if(args.length !== 3) {
        throw Error('Wrong argument count. There must be 3 arguments');
    } return args.reduce((accumulator, currNum) => {
        if(typeof(currNum) !== 'number') {
            throw Error('Wrong argument type. All arguments must be numbers');
        } return accumulator + currNum * currNum;
    }, 0);
} 

console.log(sumOfSquares(5,3,10))