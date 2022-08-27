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

function retornarMaior(array) {
    let maior = 0;

    for(i = 0; i < array.length; i += 1) {
        if (array[i] > array[maior]) {
            maior = i;
        };
    };
    return maior;
}

console.log(retornarMaior([2, 3, 6, 7, 10, 1]));

function retornarMenor(array) {
    let menor = 0;

    for (i = 0; i < array.length; i += 1) {
        if (array[i] < array[menor]) {
            menor = i;
        };
    };
    return menor;
}

console.log(retornarMenor([2, 4, 6, 7, 10, 0, -3]));

function nomeMaior(array) {
    let maior = 0;

    for (i = 0; i < array.length; i += 1) {
        if (array[i].length > array[maior].length) {
            maior = i;
        };
    };
    return array[maior];
}

console.log(nomeMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function numRepete(array) {
    let Duplicatas = array.filter((array[index], index).array.indexOf(item) != index);
    for (i = 0; i < Duplicatas(array.length); i+=1) {
    if (Duplicatas(array.length) > 1) {
        Duplicatas = array.filter((item, index).array.indexOf(item) != index)
    }
}
return Duplicatas(array[0]);
}

console.log(numRepete([2, 3, 2, 5, 8, 2, 3]));