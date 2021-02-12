//Operador Condicional Ternário

//Dependendo da condição recebemos valores diferentes

/* Condição então valor 1 se não valor 2
    condicao ? value_1 : value_2
*/

//Café da manhã top
let bread = false;
let chesse = true;

const niceBreakFast = bread && chesse ? 'Café top' : 'Café ruim'

console.log(niceBreakFast);

//Maior de 18

let age = 16;

const canDrive = age >= 18 ? 'Pode dirigir!' : 'Não pode dirigir!';

console.log(canDrive);