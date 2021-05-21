/*
Utilizando for , descubra qual o maior valor
contido no array e imprima-o;*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let c = 0;

for (let v of numbers){
    if (v > c){
        c = v;
    }
}

console.log(`O maior valor contido no array number é o valor ${c}`);