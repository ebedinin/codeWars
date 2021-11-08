function alphabetPosition(text) {
    let codeChars = [];
    for (let i = 0; i <= text.length; i++) {
        const code = text.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            const number = code - 64;
            codeChars.push(number.toString())
        }
        if (code >= 97 && code <= 122) {
            const number = code - 96;
            codeChars.push(number.toString())
        }
    }
    return codeChars.join(" ");
}