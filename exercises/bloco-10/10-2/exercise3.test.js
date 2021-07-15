// 3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .

const {
    users,
    findUserById,
    getUserName,
} = require('./exercise2');

describe('Verify function getUserName with Async/Await', () => {

    it('Should be return the right user name when pass a existent ID to the function', async () => {
        expect.assertions(1);
        const data = await getUserName(4);
        expect(data).toBe('Mark');
    })

    it('Should be return error msg when pass an invalid user id', async () => {
        expect.assertions(1);
        try{
            const data = await getUserName(3);
        } catch (error) {
            expect(error).toEqual ({ error: 'User with 3 not found.'});
        }
    })

});
