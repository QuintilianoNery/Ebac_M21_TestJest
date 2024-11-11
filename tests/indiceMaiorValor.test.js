const { encontrarMaiorMenor } = require('../Functions/indiceMaiorValor.js');

describe('encontrarMaiorMenor', () => {
  it('deve encontrar o índice do maior e do menor valor em um array', () => {
    const array = [5, 2, 8, 1, 9, 3];
    const resultado = encontrarMaiorMenor(array);
    expect(resultado).toEqual([9,1]);
  });

  it('deve lidar com arrays vazios', () => {
    const arrayVazio = [];
    const resultadoVazio = encontrarMaiorMenor(arrayVazio);
    expect(resultadoVazio).toEqual([null, null]);
  });

  it('deve lidar com arrays com um único elemento', () => {
    const arrayUnico = [7];
    const resultadoUnico = encontrarMaiorMenor(arrayUnico);
    expect(resultadoUnico).toEqual([7,7]);
  });

  it('deve lidar com arrays com valores duplicados', () => {
    const arrayDuplicado = [4, 2, 8, 2, 9, 4];
    const resultadoDuplicado = encontrarMaiorMenor(arrayDuplicado);
    expect(resultadoDuplicado).toEqual([9,2]);
  });
});