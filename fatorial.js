function fatorial(numero) {
 
        // Verifica se o número é não-negativo
        if (numero < 0) {
            return "Número negativo. Fatorial não definido.";
        }
    
        // Caso base: fatorial de 0 é 1
        if (numero === 0) {
            return 1;
        }
    
        // Calcula o fatorial usando um loop
        let resultado = 1;
        for (let i = 1; i <= numero; i++) {
            resultado *= i;
        }
    
        return resultado;
    }
    
    // Exemplos de uso
    console.log(fatorial(5));  // 120
    console.log(fatorial(0));  // 1
    console.log(fatorial(-3)); // "Número negativo. Fatorial não definido."


console.log(fatorial())

export default fatorial