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
let maisRepete = 0;
let repetiu = 0;
let indexDoNum = 0;

    for (let index in array) {
        let numeroDaVez = array[index];
        // Define o número que irá passar comparando
        for (let index2 in array) {
            if (numeroDaVez === array[index2]) {
                repetiu += 1;
            }
        }
        if (repetiu > maisRepete) {
            maisRepete = repetiu;
            indexDoNum = index;
        }
        repetiu = 0;
    }
    return array[indexDoNum];
}

console.log(numRepete([2, 3, 2, 5, 8, 2, 3]));