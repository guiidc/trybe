let salarioBruto = 3000;
let salarioLiquido = 0;

if (salarioBruto <= 1556.94){
    salarioLiquido = salarioBruto * (1 - 0.08);
} else if (salarioBruto <= 2594.92){
    salarioLiquido = salarioBruto * (1 - 0.09);
} else if (salarioBruto <= 5189.82){
    salarioLiquido = salarioBruto * ( 1 - 0.11)
} else {
    salarioLiquido - 570.88
}


if (salarioLiquido >= 1903.99 && salarioLiquido <= 2826.65){
    salarioLiquido = salarioLiquido * (1- 0.075) + 142.80;
} else if ( salarioLiquido <= 3751.05){
    salarioLiquido = salarioLiquido * (1- 0.15) + 354.80;
} else if (salarioLiquido <= 4664.68){
    salarioLiquido = salarioLiquido * (1 - 0.225) + 636.13
} else{
    salarioLiquido * (1 - 0.275) + 869.36
}





console.log(salarioLiquido);