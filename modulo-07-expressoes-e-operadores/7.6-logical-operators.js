//Operadores Lógicos

//2 valores booleanos, quando verificados resultará em verdadeiro ou falso


let bread = true;
let cheese = true;
let hamburger = false;
let coffee = false;

//AND &&
if ( bread && cheese && hamburger ){
    console.log('Snack time!, I have a Xburguer');
}
else
{
    console.log('Snack time!, I have to go to the Market');
}

//OR ||
console.log(bread || cheese)//true
console.log(bread || hamburger)//true;
console.log(coffee || hamburger)//false;

//NOT !
console.log(!coffee);//true