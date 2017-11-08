let exportedMethods = {
    palindromeChecker = (word) => {
        if(typeof(word) !== "string") {
            throw typeError("Input was not a string");
        }

        left = 0;
        right = word.length - 1;

        while(left < right) {
            if(word[left++] !== word[right--]) {
                return false;
            }
        }
        return true;
    }
}

module.exports = exportedMethods;