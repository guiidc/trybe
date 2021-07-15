/*
1 - Escreva um teste que verifique a chamada do callback de uma função uppercase,
que transforma as letras de uma palavra em letras maiúsculas.
Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.
*/


const uppercase = require('./exercise1');

describe('uppercase function', () => {

    it('callback recevies a uppercase string', (done) => {
        const callback = (data) => {
            expect(data).toBe('GUILHERME');
            done();
        };

        uppercase('guilherme', callback)
    })

})