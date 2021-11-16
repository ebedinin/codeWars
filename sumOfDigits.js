const numberToArrayDifits = (number) =>{
    let sum = 0;
    while (number > 0){
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
};
function digital_root(n) {
    while (n>=10) {
        n = numberToArrayDifits(n);
    }
    return n;
}
console.log(digital_root(456));