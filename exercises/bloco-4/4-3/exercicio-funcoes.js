/*
1.Crie uma função que receba uma string e retorne true se for um palíndromo ,
ou false , se não for.
*/

function palindromo (str){
    for (let i = 0; i < str.length; i++){
        if (str[i] !== str[str.length - 1 - i]){
            return false;
        }
    }return true;
    
}

console.log(palindromo('bicicleta'))


/*
2.Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; 
*/

function higherNumberIndex (array){
    let higherNumber = 0;
    for (let i of array){
        if (i > higherNumber){
            higherNumber = i
        }
    }
    return array.indexOf(higherNumber);
}

console.log(higherNumberIndex([2, 3, 6, 7, 10, 1]));


/*
3.Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
*/

function lowerNumberIndex (array){
    let lowerNumber = array.length - 1;
    for (let v of array){
        if (v < lowerNumber){
            lowerNumber = v;
        }
    }
    return array.indexOf(lowerNumber);
}

console.log(lowerNumberIndex([2, 4, 6, 7, 10, 0, -3]));



/*
Crie uma função que receba um array de nomes e retorne o nome com a maior
quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
*/

function biggerName(array){
    let name = '';
    for (let v of array){
        if (v.length > name.length){
            name = v
        }
    }
    return name;
}

console.log(biggerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

/*
Crie uma função que receba um array de inteiros e
retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
*/

function mostRepeated (array){
    let mostUsed = [];

    for (let v of array){
        let counter = [];
        counter = array.filter( i => i === v);
        if (counter.length > mostUsed.length){
            mostUsed = counter;
        }
    }
    return mostUsed[0];
}

console.log(mostRepeated([2, 3, 2, 5, 8, 2, 3]))
