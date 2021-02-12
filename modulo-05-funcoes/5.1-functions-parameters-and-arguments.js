//Functions

/**
 * Sum two value 
 * @param {*} number_1 parameters = são passados na declaração da função
 * @param {*} number_2 
 */

//function expression
const sum = function(number_1, number_2){
    console.log(number_1 + number_2);
}

//Arguments - são passado para a função ser executada
sum(2,3);
sum(4,5);


//anonymous function
(function(){
    console.log("I'm anonymous function");
}());