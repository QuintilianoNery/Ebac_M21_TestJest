const { multiplos } = require('../Functions/somaMultiplos.js');

describe('multiplos', () => {
    it('deve retornar a soma correta dos múltiplos de 5 ou 7 abaixo de 1000', () => {
        expect(multiplos()).toBe(156361)
    });
    it('deve retornar um numero diferente de', () => {
        expect(multiplos()).not.toBe(156362)
    })
    it('deve retornar um número', () => {
        expect(typeof multiplos()).toBe('number')
    });
    it('deve retornar um número inteiro', () => {
        expect(Number.isInteger(multiplos())).toBe(true)
    });
    it('deve retornar um número positivo maior que 0', () => {
        expect(multiplos()).toBeGreaterThan(0)
        expect(multiplos()).toBeGreaterThan(0)
    });
});
