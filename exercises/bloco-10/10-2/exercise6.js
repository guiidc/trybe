/*
6.1 - Adicione uma funcionalidade para buscar pelo nome do animal
crie uma função que deverá passar no teste abaixo.
*/

const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];
  
  const findAnimalByName = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const animal = Animals.find((animal) => animal.name === name);
            if (animal) return resolve(animal);
            const msgError = 'Nenhum animal com esse nome!'
            return reject(msgError);
        }, 100);
    })
  }; 

  const getAnimalByAge = (age) => {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        const animalsFiltered = Animals.filter((animal) => animal.age === age);
        if (animalsFiltered.length !== 0) return resolve(animalsFiltered);
        return reject ('Não foi encontrado nenhum animal com esta idade.')
      }, 1000)
    })

  }
  
  const getAnimal = (name) => {
     return findAnimalByName(name)
     .then((list) => list);
  };

  module.exports = {
      Animals,
      findAnimalByName,
      getAnimal,
      getAnimalByAge,
  }