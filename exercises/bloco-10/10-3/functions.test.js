const { up, first, concat } = require('./functions');

jest.mock('./functions');

describe('Testing functions with mock', () => {

    // exercicio 4
    it('should be return a string in lower case mode', () => {
        up.mockImplementation((str) => str.toLowerCase());
        expect(up('GUILHERME')).toBe('guilherme');
    })

    it('should return de last caractere of a string', () => {
        first.mockImplementation((str) => str[str.length - 1]);
        expect(first('Guilherme')).toBe('e');
        first.mockRestore();
})
});