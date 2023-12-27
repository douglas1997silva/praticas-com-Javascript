
function numero (){
    const contador = 100;
   for (let i = 0; i <= contador; i++) {
    if(i % 3 ===  0){
        console.log('Fizz')
    }else if(i % 5 ===  0 ){
        console.log('Buzz')
    }else if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }else{
        console.log(i)
    }
     
   }
}
numero()


function trinangulo (numero){
    for (let i = 0; i <=numero; i++) {
        let zero = '';
        for (let h = 0; h < i; h++) {
            
            zero += h + '' 
        }
        console.log(zero)
    }
}

trinangulo(15)

function somaDigito (n){

    let soma= 0 ;
    let numeroString = n.toString();
    for (let i = 0; i < numeroString.length; i++) {
        soma += parseInt(numeroString[i])
        
    }
    return soma
}

console.log(somaDigito(578))