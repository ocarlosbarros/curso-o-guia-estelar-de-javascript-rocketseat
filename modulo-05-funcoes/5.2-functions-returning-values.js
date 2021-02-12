//Functions - Returning values


//Toda funçao retorna alguma coisa caso não seja explicito o retorno o retorno será undefined
const sum = function(number_1, number_2){
    //var total = number_1 + number_2; em funções o var também possuí escopo local
    total = number_1 + number_2;
    return total;// para a execução e retorna o que está na frente
}

sum(2,3);
sum(4,5);
sum(56, 100);


let number_1 = 34;
let number_2 = 25;
 
console.log(`O número 1 é: ${number_1}`);
console.log(`O número 2 é: ${number_2}`);
/* console.log(total); -> total não é definido aqui porque a função ainda nao foi executada */
console.log(`A soma é ${sum(number_1, number_2)}`);
console.log(total);//Como a função foi executada e não foi atribuido nenhuma palavra chave na variável total dentro da função, total existirá fora do escopo local