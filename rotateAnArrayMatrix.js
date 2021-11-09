function rotate(matrix, direction) {
    let array_return = [];
    const size = matrix.length;
    if (size < 1) return matrix;
    const count_row = matrix.length;
    const count_field = matrix[0].length;
    if (direction === "clockwise") {
        for (let i = 0; i < count_field; i++) {
            let row = [];
            for (let j = count_row - 1; j >= 0; j--) {
                row.push(matrix[j][i])
            }
            array_return.push(row);
        }
    }
    if (direction === "counter-clockwise") {
        for (let i = count_field - 1; i >= 0; i--) {
            let row = [];
            for (let j = 0; j < count_row; j++) {
                row.push(matrix[j][i])
            }
            array_return.push(row);
        }
    }
    return array_return;
}

let matrix = [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];
console.log(rotate(matrix, "counter-clockwise"));
console.log(rotate(matrix, "clockwise"));
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
];
console.log(rotate(matrix, "counter-clockwise"));
console.log(rotate(matrix, "clockwise"));
matrix = [ [1] ];
console.log(rotate(matrix, "counter-clockwise"));
console.log(rotate(matrix, "clockwise"));
matrix = [ [1,2,3] ];
console.log(rotate(matrix, "counter-clockwise"));
console.log(rotate(matrix, "clockwise"));
matrix = [ [1],[2],[3] ];
console.log(rotate(matrix, "counter-clockwise"));
console.log(rotate(matrix, "clockwise"));