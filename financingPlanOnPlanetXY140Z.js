function finance(n) {
    let sum = 0;
    let a1 = n * 2,an=a1;
    for (let i = n + 1; i > 0; i--) {
        sum += (a1+an)/2*(n-i+2);
        a1 -= 2;
        an -= 1;
    }
    return sum;
}
const finance2 = n => n * ++n * ++n / 2;

console.log(finance(3710));