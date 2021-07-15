/*
6.1 - Adicione uma funcionalidade para buscar pelo nome do animal
crie uma função que deverá passar no teste abaixo.
*/

const {
    Animals,
    findAnimalByName,
    getAnimal,
    getAnimalByAge,
} = require('./exercise6');

describe('Testando promise - findAnimalByName', () => {
    describe('Quando existe o animal com o nome procurado', () => {
      test('Retorne o objeto do animal', () => {
        expect.assertions(1);
        return getAnimal('Dorminhoco').then(animal => {
          expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
        });
      });
    });
  
    describe('Quando não existe o animal com o nome procurado', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return getAnimal('Bob').catch(error =>
          expect(error).toEqual('Nenhum animal com esse nome!')
        );
      });
    });

    describe('Quando existe animal com a idade procurada', () => {
      it('Retorna um array de objetos com os animais da idade procurada', () => {
        expect.assertions(1);
        return getAnimalByAge(2)
        .then((data)=> {
          expect(data).toEqual([{ name: 'Soneca', age: 2, type: 'Dog' }]);
        })
      })
    })

    describe('Quando não existe um animal com a idade procurada', () => {
      it('Retorna um array de objetos com os animais da idade procurada', () => {
        expect.assertions(1);
        return getAnimalByAge(3)
        .catch((data)=> {
          expect(data).toBe('Não foi encontrado nenhum animal com esta idade.');
        })
      })
    })
  });