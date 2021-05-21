/*
Utilizando for , crie um array que vá de 1 até 25 e
imprima o resultado;
*/

let array = [];

for (let c = 1; c <= 25; c++){
    array.push(c)
}

console.log(array);

/*
Utilizando o array criado no exercício anterior imprima o
resultado da divisão de cada um dos elementos por 2 .
*/

let arrayPorDois = [];

for (let v of array){
    arrayPorDois.push(v / 2);
}

console.log(arrayPorDois)