/*
Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo.
Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário.
Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
*/

let angulo1 = 60;
let angulo2 = 60;
let angulo3 = -5;

if (angulo1 >= 0 && angulo2 >= 0 && angulo3 > 0){
    const soma = angulo1 + angulo2 + angulo3
    if (soma === 180){
        console.log(true);
    }else{
        console.log(false)
    }
}else{
    console.log('O angulo digitado deve ser maior que 0')
}

