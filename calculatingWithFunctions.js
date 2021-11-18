function zero(x = null) {
    if (x === null) return 0;
    else return x(0);
}

function one(x = null) {
    if (x === null) return 1;
    else return x(1);
}

function two(x = null) {
    if (x === null) return 2;
    else return x(2);
}

function three(x = null) {
    if (x === null) return 3;
    else return x(3);
}

function four(x = null) {
    if (x === null) return 4;
    else return x(4);
}

function five(x = null) {
    if (x === null) return 5;
    else return x(5);
}

function six(x = null) {
    if (x === null) return 6;
    else return x(6);
}

function seven(x = null) {
    if (x === null) return 7;
    else return x(7);
}

function eight(x = null) {
    if (x === null) return 8;
    else return x(8);
}

function nine(x = null) {
    if (x === null) return 9;
    else return x(9);
}

function plus(x) {
    return (y)=> y+x;
}

function minus(x) {
    return (y)=> y-x;
}

function times(x) {
    return (y)=> y*x
}

function dividedBy(x) {
    return (y)=> Math.floor(y / x);
}

console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));
