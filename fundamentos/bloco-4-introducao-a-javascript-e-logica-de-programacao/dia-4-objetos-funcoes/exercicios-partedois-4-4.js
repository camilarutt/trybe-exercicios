function palindromo(palavra) {
    let reverseWord = '';

    reverseWord = palavra.split('').reverse().join(reverseWord);
    
    if (reverseWord === palavra) {
        return true;
    }
    else {
        return false;
    };
}

console.log(palindromo('arara'));