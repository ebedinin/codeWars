function findOdd(A) {
    const map = {};
    for (let i=0;i<A.length;i++){
        map.hasOwnProperty(A[i])?map[A[i]]+=1:map[A[i]]=1;
    }
    const keys = Object.keys(map);
    for (let i =0; i<keys.length;i++){
        if(map[keys[i]] % 2!==0){
            return Number(keys[i]);
        }
    }
}

console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));