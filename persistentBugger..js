function persistence(num) {
    let arr = num.toString().split('');
    if (arr.length <= 1) return 0;
    let mult = 1;
    let iter = 1;
    arr.forEach((value) =>{mult *= Number(value)} );
    while (mult >= 10) {
        iter++;
        arr = mult.toString().split('');
        mult = 1;
        arr.forEach((value) =>{mult *= Number(value)} );
    }
    return iter;
}

console.log(persistence(25));