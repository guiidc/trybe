const bonus = require('./bonus');

const fetch = require('node-fetch');
jest.mock('node-fetch');

describe('testing fetchJoke function', () => {

    fetch.mockImplementation(async () => {
        return {
            json: () => ({
                id: '7h3oGtrOfxc',
                joke: 'Whiteboards ... are remarkable.',
                status: 200
              }),
        }
    })
    it('should return a bad joke string', async () => {
        expect.assertions(1);

        const data = await fetch();
        const joke = await data.json();
        expect(joke.joke).toBe('Whiteboards ... are remarkable.')
    })
})