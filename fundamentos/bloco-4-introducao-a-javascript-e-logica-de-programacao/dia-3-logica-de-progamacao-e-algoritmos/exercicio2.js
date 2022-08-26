var numero = 10;
var resultado = numero; 
var indexDois = numero - 1;

for (index = indexDois; index > 1; index -= 1) {
    resultado *= index;
}

console.log(resultado);