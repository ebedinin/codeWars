function getParticipants(handshakes) {
    handshakes = BigInt(handshakes);
    if (handshakes === 0n) return 1;
    if (handshakes === 1n) return 2;
    if (handshakes === 2n) return 3;
    if (handshakes === 3n) return 3;
    let fact = 3n;
    for (let i = 3n; i <= handshakes; i++) {
        fact *= i;
        const c1 = fact / ((fact / (i * (i - 1n))) * 2n);
        const c2 = (fact * (i + 1n)) / ((fact / i) * 2n);
        if (handshakes === c1) {
            return Number(i);
        }
        if (handshakes > c1 && handshakes <= c2) {
            return Number(i + 1n);
        }
    }
}
console.log(getParticipants(3));