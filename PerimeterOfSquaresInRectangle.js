function perimeter(n) {
    if (n <1) return 4;
    if (n === 1) return 8;
    let n_2 = 1, n_1 = 1;
    let sum =n_1+n_1;
    for (let i=2;i<=n;i++){
        let n_0 = n_2+n_1;
        sum+=n_0;
        [n_1,n_2] = [n_0,n_1];
    }
    return 4*sum;
}
console.log(perimeter(8));