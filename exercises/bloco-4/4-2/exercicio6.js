/*
Descubra quantos valores ímpares existem no array e imprima o resultado.
Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let c = 0;

for (let v of numbers){
    if (v % 2 !== 0){
        c++;
    }
}

console.log(`O numero de valor impares contido no array "numbers" é ${c}`);