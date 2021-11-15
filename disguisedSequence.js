function fcn(n) {
    let u0 = 1, u1 = 2;
    switch (n) {
        case 0:
            return u0;
        case 1:
            return u1;
    }
    for (let i = 2; i <= n; i++) {
        u2 = (6 * u0 * u1) / (u0 + u1);
        u0 = u1;
        u1 = u2;
    }
    return u2;
}
console.log(fcn(17));