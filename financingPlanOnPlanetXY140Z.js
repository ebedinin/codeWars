function finance(n) {
   let sum =0;
   //n = n+1;
    let a1=0;
   for(let i = n; i>0; i--){
       //sum += (i+n-1)/2*n;
       const an=a1+n;
       sum += (i+n)/2*(n+1);
       console.log(i,a1,an);
       a1+=2;
   }
   return sum;
}
console.log(finance(5));