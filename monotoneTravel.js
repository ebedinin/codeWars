var range = function(a,b){
    var r = [], step = b - a > 0 ? 1 : -1;
    do{ r.push(a) } while (step * (b - (a += step)) >= 0);
    return r;
};
var isMonotone = function (arr) {
    if (arr.length <= 1)
        return true;
    for (let i = 1; i < arr.length; i++) {
        if (arr[0] > arr[i]) return false;
    }
    return isMonotone(arr.slice(1))
};
console.log(range(1,10));
console.log(isMonotone(range(1,10)));
console.log(isMonotone([5,5,5,5,5]));