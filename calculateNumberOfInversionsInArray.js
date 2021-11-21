function countInversions(array) {
    let invCount = 0;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) invCount++;
        }
    }
    return invCount;
}

console.log(countInversions([6, 5, 2, 4, 3, 3, 1]));

//console.log(count.toString(2));