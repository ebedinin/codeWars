const count9 = (arr) => {
    if (arr.length === 0) return 0;
    if (arr.length === 1) return  arr[0] === 9 ? 1 : 0;

    const rating = arr.length;
    const k = arr[0];
    const a = (rating - 1) * 10 ** (rating - 2) * (k);
    const b1 = (Number(arr.slice(1).join(''))+ count9(arr.slice(1))+1);
    const b2 = count9(arr.slice(1));
    const b = (arr[0] === 9) ? b1 : b2;
    return a+b;
};

const number9 = (n) => {
    const arr = [];
    let iter = 0;
    let number = n;
    while (number > 0) {
        arr.unshift(number % 10);
        number = Math.floor(number / 10);
        iter++;
    }
    return count9(arr);
};
console.log(number9(937));
console.log(number9(10000000));