function sevenAte9(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (i >= 1 && i <= (str.length-2)){
            if(!(str.charAt(i) === '9' && str.charAt(i-1) === '7' && str.charAt(i+1) === '7' )){
                result.push(str.charAt(i));
            }
        }
        else result.push(str.charAt(i));
    }
    return result.join('');
}
console.log(sevenAte9(str)==='16556178612178977');