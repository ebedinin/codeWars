function validParentheses(parens) {
    if (parens.length === 1) return false;
    let accumulate = 0;
    for (let i = 0; i < parens.length; i++) {
        accumulate += parens[i] === "("?1:-1;
        if (accumulate < 0) return false;
    }
    return accumulate === 0;
}

console.log(validParentheses(""));