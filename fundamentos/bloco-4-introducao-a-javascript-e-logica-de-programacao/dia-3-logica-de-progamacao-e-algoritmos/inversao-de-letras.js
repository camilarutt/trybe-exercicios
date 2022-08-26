let word = 'tryber';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

reverseWord = word.split('').reverse().join(reverseWord);

console.log(reverseWord);