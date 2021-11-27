const {log} = console;
const sumDigitals = (string) =>{
  let sum =0;
  string.split('').forEach((item) =>sum+=Number(item));
  return sum;
};
function orderWeight(string) {
    const arr = string.split(" ");
    if (arr.length === 0) return "";
    arr.sort(((a, b) => {
        const difference = sumDigitals(a) - sumDigitals(b);
        if (difference === 0) {
            if (a>b) return 1;
            if (a<b) return  -1;
            return 0;
        }
        return difference;
    }));
    return arr.join(" ");
}
log(orderWeight("56 65 74 100 99 68 86 180 90"));