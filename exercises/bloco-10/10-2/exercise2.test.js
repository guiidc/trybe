/*
O código a seguir simula uma chamada ao banco de dados para buscar usuários.
O resultado dessa busca é uma Promise , que é utilizada pelo método getUserName.

2 - Utilizando a sintaxe de Promise,
faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado,
e também um teste para o caso em que o usuário não é encontrado.
*/

const {
    users,
    findUserById,
    getUserName,
} = require('./exercise2');


describe('Verify function getUserName with Promises', () => {

    it('Should be return the right user when pass a existent ID to the function', () => {
        expect.assertions(1);
        return getUserName(4).then((data) => {
            expect(data).toBe('Mark');
        })
    });

    it('Should be return error msg when pass an invalid user id', () => {
        expect.assertions(1);
        return getUserName(3)
        .catch((data) => {
            expect(data).toEqual({ error: 'User with 3 not found.'})
        })
    })
})