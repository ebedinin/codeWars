const calculationheight = (v, t) =>   v*t-0.5*9.81*t*t;
function maxBall(v0) {
    const v = v0*1000/3600;
    let t = 0;
    let h1 = calculationheight(v,t);
    let h2 = calculationheight(v,(t+1)/10);
    while (h1 < h2){
        t+=1;
        h1 = h2;
        h2 = calculationheight(v,(t+1)/10);
    }
    return Math.floor(t);
}

console.log(maxBall(85));