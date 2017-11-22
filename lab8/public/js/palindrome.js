var palindromeChecker = function palindromeChecker(word) {
    if (typeof word !== 'string') {
        throw typeError('Input was not a string');
    }

    for (var left = 0, right = word.length - 1; left < right; left++, right--) {
        if (word[left] !== word[right]) {
            return false;
        }
    }
    return true;
};

var submitText = function submitText() {
    var form = document.getElementById('submission'),
        text = document.getElementById('output').value.replace(/[^\w]/g, '').toLowerCase(),
        list = document.getElementById('checkedList'),
        value = document.createElement('li');
    if (text === "") {
        alert("Not a valid word!");
        return false;
    }
    if (palindromeChecker(text)) {
        value.setAttribute('class', 'is-palindrome');
    } else {
        value.setAttribute('class', 'not-palindrome');
    }
    value.appendChild(document.createTextNode(text));
    list.appendChild(value);
    form.reset();
    return false;
};