/*
    Type conversion/typecasting: Explicitamente informado o tipo de conversão de valores
    Type coersion: O JS decide qual o tipo de valor a ser convertido implicitamente.
*/

console.log('9' + 5)//95 JS converte 5 para '5'

console.log(Number('9') + 5);//Dev explicitamente escreve o tipo para ser convertido: 14