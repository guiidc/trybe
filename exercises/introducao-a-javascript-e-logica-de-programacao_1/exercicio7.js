//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100)
let nota = 55;

if (nota >= 90) nota = 'A';
if (nota >= 80) nota = 'B';
if (nota >= 70) nota = 'C';
if (nota >= 60) nota = 'D';
if (nota >= 50) nota = 'E';
if (nota < 50) nota = 'F';
if (nota < 0 || nota > 100) nota = 'A nota digitada deve estar entre 0 e 100';

console.log(nota);


