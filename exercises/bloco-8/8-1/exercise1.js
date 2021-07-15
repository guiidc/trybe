function generateObj (nomeCompleto) {
    return {
        nomeCompleto,
        email: `${nomeCompleto}@trybe.com`
    }
}


const newEmployees = () => {
    const employees = {
        id1: generateObj('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: generateObj('Luiza Drumond'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id3: generateObj('Carla Paiva'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    }
    return employees;
};


console.log(newEmployees());