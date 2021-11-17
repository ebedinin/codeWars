function anagrams(word, words) {
    const arr = [];
    word = word.split('').sort().join();
    for (let i = 0; i < words.length; i++) {
        if (words[i].split('').sort().join() === word) {
            arr.push(words[i]);
        }
    }
    return arr;
}
console.log('bbaa'.split('').sort().join());
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));

