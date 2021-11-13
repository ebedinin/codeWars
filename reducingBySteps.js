function gcdi(x, y) {
    const x_abs = Math.abs(x), y_abs = Math.abs(y);
    if (y_abs === 0) return x_abs;
    return gcdi(y_abs, x_abs % y_abs);
}

function lcmu(a, b) {
    const a_abs = Math.abs(a);
    const b_abs = Math.abs(b);
    return a_abs * (b_abs / gcdi(a_abs, b_abs));
}

function som(a, b) {
    return a + b;
}

function maxi(a, b) {
    return Math.max(a, b);
}

function mini(a, b) {
    return Math.min(a, b);
}

function operArray(fct, arr, init) {
    if (arr.length === 0) return [];
    let result = [fct(init, arr[0])];
    if (arr.length === 1) return result;
    for (let i = 1; i < arr.length; i++) {
        result.push(fct(result[i - 1], arr[i]));
    }
    return result;
}

console.log(operArray(gcdi, [18, 3, 3, 3, 1, 1], 9));