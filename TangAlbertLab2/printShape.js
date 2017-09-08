const triangle = (lines) => {
    if(typeof(lines) !== 'number' || lines < 1 || !Number.isSafeInteger(lines)) {
        throw TypeError("The argument is not in the correct form. The argument \
        must be an integer greater than 0");
    }
    let currLine = 0;
    while(currLine < lines) {
        console.log(`${' '.repeat(lines - currLine - 1)}/${
            (currLine !== lines - 1) ? 
            '  '.repeat(currLine) : '--'.repeat(currLine)}\\`);
        currLine++;
    }
}

const square = (lines) => {
    if(typeof(lines) !== 'number' || lines < 2 || !Number.isSafeInteger(lines)) {
        throw TypeError("The argument is not in the correct form. The argument \
        must be an integer that is greater than 1!");
    }
    let currLine = 1;
    while(currLine <= lines) {
        console.log(`    |${(currLine === 1 || currLine === lines) ?
            '-'.repeat(lines) : ' '.repeat(lines)}|`);
        currLine++;
   }
}

const rhombus = (lines) => {
    if(typeof(lines) !== 'number' || lines % 2 === 1 || !Number.isSafeInteger(lines)) {
        throw TypeError("The argument is not in the correct form. The argument \
        must be an even integer!");
    }
    let currLine = 0, 
    halfLines = lines / 2 - 1, 
    res = `   ${' '.repeat(halfLines)}/-\\${
        ' '.repeat(halfLines)}   `;
    currLine++;
    while(currLine <= halfLines) {
        res += `\n   ${' '.repeat(halfLines - currLine)}/ ${
            '  '.repeat(currLine)}\\   ${' '.repeat(halfLines - currLine)}`;
        currLine++;
    }
    res += `\n${res.split("").reverse().join("")}`;
    console.log(res);
}

triangle(1);
triangle(2);
triangle(3);
square(2);
square(3);
rhombus(2);
rhombus(4);
rhombus(6);
rhombus(40);