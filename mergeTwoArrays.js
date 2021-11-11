function mergeArrays(a, b) {
    const count_a = a.length;
    const count_b = b.length;
    const count = Math.max(a.length, b.length);
    let arr = [];
    for (let i = 0; i < count; i++) {
        if (i < count_a) arr.push(a[i]);
        if (i < count_b) arr.push(b[i]);
    }
    return arr;
}

console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']));