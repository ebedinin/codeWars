// Returns number of complete beeramid levels
const beeramid = function(bonus, price) {
    let sum=0;
    const max = Math.floor(bonus /price);
    if (max < 1 ) return 0;
    let iter = 1;
    sum+=iter**2;
    while (sum <= max){
        iter++;
        sum+=iter**2;
    }
    return iter-1;
};
console.log(beeramid(9,2));
console.log(beeramid(10,2));
console.log(beeramid(11,2));