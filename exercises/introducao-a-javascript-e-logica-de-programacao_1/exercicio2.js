

/*
Faça um programa que retorne o maior de dois números.
Defina no começo do programa duas variáveis com os valores que serão comparados.
*/

let v1 = 30;
let v2 = 20;
let v3 = 30;

if (v1 > v2) {
    console.log(v1);
}else{
    console.log(v2)
}

/*
Faça um programa que retorne o maior de três números.
Defina no começo do programa três variáveis com os valores que serão comparados.
*/

if (v1 > v2 && v1 > v3) {
    console.log(v1);
}else if(v2 > v1 && v2 > v3) {
    console.log (v2);
}else if (v3 > v1 && v3 > v2) {
    console.log(v3);
}

/*
Faça um programa que, dado um valor definido numa variável,
retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
*/

let a = 1;

if (a > 0) {
    console.log('positive');
}else if (a < 0) {
    console.log('negative');
}else {
    console.log(0);
}


/*
Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo.
Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário.
Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
*/

let angulo1 = 60;
let angulo2 = 60;
let angulo3 = 60;
let somaAngulos = angulo1 + angulo2 + angulo3;

if (somaAngulos === 180){
    console.log(true);
}else if (somaAngulos !== 180){
    console.log(false)
}else{
    console.log('Valor inválido')
}