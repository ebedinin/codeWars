function digPow(n, p) {
    const digits = [];
    let number = n;
    while (number > 0) {
        digits.push(number % 10);
        number = Math.floor(number / 10);
    }
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        sum += digits[digits.length - 1 - i] ** (p + i);
    }
    return sum % n === 0 ? sum / n : -1;

}

console.log(digPow(46288, 3));