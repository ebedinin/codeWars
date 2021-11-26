const pageDigits = (pages) => {
    const arr = [];
    let number = pages;
    while (number > 0n) {
        arr.unshift(number % 10n);
        number = (number - (number % 10n)) / 10n;
    }
    if (arr.length === 1) return pages;
    const n = BigInt(arr.length);
    let sum = n*(pages - 10n**(n-1n)+1n);
    for (let i=BigInt(arr.length)-1n;i>0n;i--){
        sum+=i*(10n**i-10n**(i-1n));
    }
    return sum;
};

console.log(pageDigits(100n));