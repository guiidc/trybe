/*
Faça um programa que retorne o maior de três números.
Defina no começo do programa três variáveis com os valores que serão comparados.
*/

let v1 = 30;
let v2 = 20;
let v3 = 30;

if (v1 > v2 && v1 > v3) {
    console.log(v1);
}else if(v2 > v1 && v2 > v3) {
    console.log (v2);
}else if (v3 > v1 && v3 > v2) {
    console.log(v3);
}