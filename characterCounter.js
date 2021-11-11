function validateWord(s) {
    let arr = s.toLowerCase().split('');
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        const char = arr[i];
        let count_char = 0;
        arr.forEach((value => value === char && count_char++));
        if (count === 0) count = count_char;
        else if (count !== count_char) return false;
    }
    return true;
}

console.log(validateWord("Abcabc"));