const zeros = (n) => {
    let sum = 0;
    let modulo;
    let i = 1;
    do {
        const y = Math.pow(5,i++);
        modulo = (n-(n %y )) / y;
        sum+=modulo;
    }
    while (modulo);
    return sum;
};
console.log(zeros(12353));