/*
Para o terceiro exercício, calcule e imprima a média
aritmética dos valores contidos no array;
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let c = 0;

for (let v of numbers){
    c += v;
}

console.log(`A média aritimética do vetor numbers é ${c / numbers.length}`);