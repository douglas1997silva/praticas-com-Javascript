
import fatorial from './fatorial.js';



function ehPalindromo(palavra) {
    // Converte a palavra para minúsculas e remove espaços em branco
    palavra = palavra.toLowerCase().replace(/\s/g, '');

    // Inverte a palavra
    const palavraInvertida = palavra.split('').reverse().join('');

    // Verifica se a palavra original é igual à palavra invertida
    return palavra === palavraInvertida;
}

function verificarPalindromo(palavra) {
    if (ehPalindromo(palavra)) {
        return `"${palavra}" é um palíndromo! `;
    } else {
        return `"${palavra}" não é um palíndromo. `;
    }
}

// Exemplos de uso
console.log(verificarPalindromo(" nada"));  // false
console.log(verificarPalindromo("tudoola"));  // false
console.log(verificarPalindromo("A man a plan a canal Panama"));  // true


const ordem = [5,10,5,74,50,75,41,1,45,20,12]


ordem.sort( (a,b)=> {
    return a - b
})

console.log(ordem)