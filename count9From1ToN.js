const number9 = (n) => {
    //console.log(n,Math.floor(n/10),n%10);
    //return Math.floor(n/10) + (n%10 === 9?1:0);
    let i = 1;
    let module = n % 10 ** i;
    let count = 0;
    /*do{
        count
    }*/
    for (let i = 1; i <= n; i++) {
        const arr = i.toString(10).slice();
        let currentCount = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === "9") {
                currentCount++;
            }
        }
        //if (currentCount) console.log(n,i,currentCount);
        count += currentCount;
    }
    return count;
};
const number92 = (n) => {

    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
};
//console.log(number9(9));
//console.log(number9(10));
console.log(number9(8));
console.log(number9(975));
//console.log(number9(98));
console.log(number9(100));
//console.log(number9(998));
console.log(number9(1000));
console.log(number9(10000));
console.log(number9(100000));
//console.log(number9(100));