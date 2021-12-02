const nok = (...x) => {
    let j = Math.max.apply(null, x);
    while (true) {
        if (x.every((b) => j % b === 0)) return j;
        else j++;
    }
};

const convertFrac = (lst) => {
    const ch = nok(...lst.map((item) => item[1]));
    return lst.map((item) => {
        return `(${ch / item[1] * item[0]},${ch})`
    }).join('');
};

let lst = [[1, 2], [1, 3], [1, 4]];
console.log(convertFrac(lst));