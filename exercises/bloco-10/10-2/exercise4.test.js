/*
4 - O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios,
e retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos',
faça um teste que verifique que os repositórios
'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.
*/

const getRepos = require('./exercise4');

describe('Should contains the elements requisited into array', () => {

    it('Should contain Todo-List and meme-generator in the array', () => {
        expect.assertions(1);
        return getRepos('https://api.github.com/orgs/tryber/repos')
        .then((data) => {
            expect(data).toEqual(expect.arrayContaining(['sd-01-week4-5-project-todo-list', 'sd-01-week4-5-project-meme-generator']));
        })
    })
})
