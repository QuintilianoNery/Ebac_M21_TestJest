// Exemplo de uso da função:
let array = [8, 5, 2, 9, 1, 6, 4, 10, 7, 3];
let [maiorValor, menorValor] = encontrarMaiorMenor(array);
function encontrarMaiorMenor(array) {
    // Verifica se o array está vazio
    if (array.length === 0) {
        return [null, null]; // Retorna null para maior e menor se o array estiver vazio
    }

    // Inicializa as variáveis maior e menor com o primeiro elemento do array
    let maior = array[0];
    let menor = array[0];

    // Laço de repetição para percorrer o array a partir do segundo elemento
    for (let i = 1; i < array.length; i++) {
        // Verifica se o elemento atual é maior que o valor armazenado em 'maior'
        if (array[i] > maior) {
            maior = array[i];
        }
        // Verifica se o elemento atual é menor que o valor armazenado em 'menor'
        if (array[i] < menor) {
            menor = array[i];
        }
    }

    // Retorna um array contendo o maior e o menor valor encontrados
    return [maior, menor];
}
module.exports = { encontrarMaiorMenor };