function tribonacci(signature,n){
    if (n===0) return [];
    if (n > 0 && n<=3) return signature.slice(0,n);
    for (let i=2; i<(n-1);i++){
        signature.push(signature[i-2]+signature[i-1]+signature[i]);
    }
    return signature;
}
console.log(tribonacci([1,1,1],10));