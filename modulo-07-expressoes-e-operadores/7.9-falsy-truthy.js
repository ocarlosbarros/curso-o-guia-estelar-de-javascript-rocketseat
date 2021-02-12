/*
    Falsy
    Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

//Type coersion
console.log(false ? 'verdadeiro' : 'falso');
console.log(0 ? 'verdadeiro' : 'falso');
console.log(-0 ? 'verdadeiro' : 'falso');
console.log("" ? 'verdadeiro' : 'falso');
console.log(null ? 'verdadeiro' : 'falso');
console.log(undefined ? 'verdadeiro' : 'falso');
console.log(NaN ? 'verdadeiro' : 'falso');

console.log();
/**
 * Truthy
 * Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)
 * 
 * true
 * {}
 * []
 * 1
 * 3.3
 * "0"
 * "false"
 * -1
 * Infinity
 * -Infinity
 * 
 */

console.log(true ? 'verdadeiro' : 'falso');
console.log({} ? 'verdadeiro' : 'falso');
console.log([] ? 'verdadeiro' : 'falso');
console.log(1 ? 'verdadeiro' : 'falso');
console.log(3.3 ? 'verdadeiro' : 'falso');
console.log("0" ? 'verdadeiro' : 'falso');
console.log("false" ? 'verdadeiro' : 'falso');
console.log(Infinity ? 'verdadeiro' : 'falso');
console.log(-Infinity ? 'verdadeiro' : 'falso');
