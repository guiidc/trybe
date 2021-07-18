// exercicio 5

const functions = require('./functions')

describe('testing up function', () => {
    const upSpyed = jest.spyOn(functions, 'up');
    
    it('should return a string in lower case', () => {
        upSpyed.mockImplementation((str) => str.toLowerCase());
        expect(functions.up('TESTE')).toBe('teste');
    })

    it('should be restored to de original implemenatation', () => {
        upSpyed.mockRestore();
        expect(functions.up('teste')).toBe('TESTE');

    })
})

