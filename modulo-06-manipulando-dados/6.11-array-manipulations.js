//Manipulando Arrays


let techs = ["Javascript", "Html", "Css", "React", ".NET", "C#", "Unity"];

//Adicionar um item no fim
techs.push("Vuejs");


//Adicionar um item no começo
techs.unshift('Nodejs');

//Remover do fim
techs.pop();
techs.pop();
//Remover do começo
techs.shift();
//Pegar somente alguns elementos do array
console.log(techs.slice(2,4));
//Remover 1 ou mais itens em qualquer posição do array
const removed = techs.splice(2,2);
console.log(removed);
//Encontrar a posição de um elemento no array
let index = techs.indexOf('.NET');
console.log(index);//2


console.log(techs);