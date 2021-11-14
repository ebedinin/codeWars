function step(g, m, n) {
    let arr = [];
    for (let j = m; j <= n; j++) {
        let isPrimes = true;
        for (let i = 2; i <= Math.floor(Math.sqrt(j)); i++) {
            if ((j % i === 0) && (i !== j)) {
                isPrimes = false;
                break;
            }
        }
        if (isPrimes) {
            for (let i = 0; i <= arr.length; i++) {
                if (Math.abs(j - arr[i]) === g) return [arr[i], j];
            }
            arr.push(j);
        }
    }
    return null;
}

console.log(step(10, 1, 110));
console.log(step(4, 100, 110));
console.log(step(6, 100, 110));
console.log(step(8, 300, 400));
console.log(step(10, 300, 400));