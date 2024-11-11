// Soma dos multiplos de 5 ou 7 abaixo de 1000.

// Função para calcular a soma dos múltiplos de 5 e 7 abaixo de 1000
function multiplos() {
    // Inicializa a variável soma com 0
    let soma = 0;

    // Laço de repetição para iterar sobre os números de 0 a 999
    for (let i = 0; i < 1000; i++) {
        // Verifica se o número atual é múltiplo de 5 ou 7
        if (i % 5 === 0 || i % 7 === 0) {
            // Se for múltiplo, adiciona o número à soma
            soma += i;
        }
    }
    // Retorna a soma dos múltiplos de 5 e 7
    return soma;
}
module.exports = { multiplos };