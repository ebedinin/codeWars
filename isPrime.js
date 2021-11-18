function isPrime(num) {
    if (num <= 1) return false;
    let isPrimes = true;
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if ((num % i === 0) && (i !== num)) {
            isPrimes = false;
            break;
        }
    }
    return isPrimes;
}
