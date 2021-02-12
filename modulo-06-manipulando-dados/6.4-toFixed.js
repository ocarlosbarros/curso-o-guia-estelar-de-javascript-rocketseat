//Manipulando String e Números

//Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number = 4351565656506894.515454545;

//Definindo casas decimais
console.log(number.toFixed(2));//4351565656506894.50

//Replace devolve uma string e troca os caracteres informados como argumentos
console.log(number.toFixed(2).replace('.', ','));//4351565656506894,50