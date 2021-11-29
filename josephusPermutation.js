function josephus(items,k){
    const arr = [];
    let i=k-1;
    while (items.length > 0){
        i = Math.floor(i/items.length)>0?i%items.length:i;
        arr.push(...items.splice(i,1));
        i+=k-1;
        i = Math.floor(i/items.length)>0?i%items.length:i;
    }
    return arr;
}
console.log(josephus([1,2,3,4,5,6,7,8,9,10],2));