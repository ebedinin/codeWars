function decode(message) {
    const asciiStart = 97;
    const asciiStop = 122;
    let arr = [];
    for (let i = 0; i < message.length; i++) {
        let char = message.charAt(i);
        const codeChar = message.charCodeAt(i);
        if (codeChar >= asciiStart && codeChar <= asciiStop) {
            char = String.fromCharCode(asciiStop - (codeChar - asciiStart))
        }
        arr.push(char);
    }
    return arr.join('');
}

console.log(decode("svool"));