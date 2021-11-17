function findSquares(x,y){
    let sum=count=x*y, d=x+y-1;
    for(let i=y-1;i>0;i--){
        count-=d;
        sum+=count;
        d-=2;
    }
    return sum;
}
console.log(findSquares(4,3));