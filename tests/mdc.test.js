const { calcularMDC } = require('../Functions/MDC.JS');

describe('calcularMDC', () => {
    it('deve calcular o MDC corretamente para números positivos', () => {
        expect(calcularMDC(24, 18)).toBe(6);
        expect(calcularMDC(12, 8)).toBe(4);
        expect(calcularMDC(15, 25)).toBe(5);
    });

      it('deve retornar o primeiro número se o segundo for 0', () => {
        expect(calcularMDC(10, 0)).toBe(10);
        expect(calcularMDC(0, 0)).toBe(0); // Caso especial: MDC(0, 0) é 0
      });

      it('deve retornar o segundo número se o primeiro for 0', () => {
        expect(calcularMDC(0, 5)).toBe(5);
      });

      it('deve funcionar com números negativos', () => {
        expect(calcularMDC(-12, -8)).toBe(-4);
        expect(calcularMDC(24, -18)).toBe(6);
      });
});
