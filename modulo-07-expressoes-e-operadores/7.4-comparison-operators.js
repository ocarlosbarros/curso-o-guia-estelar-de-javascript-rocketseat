//Operadores de comparação

//Irá comparar valores e retornará um boolean como resposta

let one = 1;
let two = 2;

//igual ==
console.log(one == 1);//true
console.log(two == 2);//true
console.log(one == two);//false
console.log("1" == 1);//true

console.log();

//diferente !=
console.log(one != two);//true
console.log(one != 1);//false
console.log(one != one);//false

console.log();

//estritamente igual === compara também o tipo: number não é igual a string
console.log(one === '1')//false;
console.log(one === 1);//true;

console.log();

//estritamente diferente !==
console.log(two !== '2');//true
console.log(two !== 2)//false

console.log();

//maior >
console.log(one > two);//false
console.log(two > one);//true;

console.log();

//menor <
console.log(one < two);//true 
console.log(two < one);//false

//maior igual >=
console.log(one >= 1);//true
console.log(two >= 1);//true

console.log();

//menor igual <==
console.log(one <= two);//true;
console.log(one <= 1);//true;
console.log(one <= 0);//false;