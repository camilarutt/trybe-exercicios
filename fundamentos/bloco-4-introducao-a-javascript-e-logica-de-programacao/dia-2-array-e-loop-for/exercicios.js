let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerolo = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
   if (numbers[index] - numerolo <= 0 ) {
    numerolo = numbers[index];
   }
}

console.log(numerolo);