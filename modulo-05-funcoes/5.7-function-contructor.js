/**
 * Function() constructor
 * expressão new
 * criar um novo objeto
 * this keyword
 */

function Hero(name){
    this.name = name //this referencia o objeto que o chamar
    this.walk = function(){
        return this.name + ' está andando...'
    }
}

const spider = new Hero("Peter Parker");
const batman = new Hero("Bruce Wayne");

console.log(`${spider.name} está ${spider.walk()}`);
console.log(`${batman.name} está ${batman.walk()}`);

//Outras funções construtoras nativas 
let birth = new Date('1991-12-23');
console.log(birth);

let marvel = new String('Marvel');
console.log(marvel);
