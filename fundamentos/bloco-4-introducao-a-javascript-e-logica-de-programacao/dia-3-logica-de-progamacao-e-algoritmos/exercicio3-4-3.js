let array = ['java', 'javascript', 'python', 'html', 'css'];
let menor = array[0]

for (index = 1; index < array.length; index += 1) {
    if (array[index].length < menor.length) { 
        // pra maior pra menor é >
        menor = array[index];
    }
}

console.log(menor);