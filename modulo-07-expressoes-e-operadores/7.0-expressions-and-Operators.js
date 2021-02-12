/*
* Operadores unários
* typeof
* delete 
*/

//typeof
let power = 3;

console.log(typeof power);//number

//delete 

const hero = {
    name: 'Bruce Wayne',
    age:26,
    id: 'Batman'
};

console.log(hero);

//Exclui a propriedade age do objeto hero
delete hero.age;

console.log(hero);