const randomNumber = require('./randomNumber');



describe('Test of randomNumber function', () => {
    const mockRandom = jest.fn().mockReturnValue(10);
    // Exercicio 1
    it('should return 10', () => {
        expect(mockRandom()).toBe(10);
        expect(mockRandom).toBeCalledTimes(1);
    })

    // Exercicio 2
    it('should return a division between two arguments just one time', () => {
        mockRandom.mockImplementationOnce((a, b) => a / b);
        expect(mockRandom(2, 2)).toBe(1);
    })

    // Exercicio 3
    it('should return de product between the three arguments', () => {
        mockRandom.mockImplementation((a, b, c) => a * b * c);
        expect(mockRandom(2, 2, 3)).toBe(12);
        mockRandom.mockReset();
    })
})