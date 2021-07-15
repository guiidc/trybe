/*
Utilizando for , descubra qual o menor valor
contido no array e imprima-o;
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let c = numbers[0];

for (let v of numbers){
    if (v < c){
        c = v;
    }
}

console.log(`O menor valor contido no array "numbers" é o valor ${c}`);