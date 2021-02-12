//Declare uma variável de nome weight
var weight;

//Que tipo de dado é a variável acima ?
console.log(typeof weight);//undefined
weight = 94.5;
console.log(typeof weight);//number

//Declare uma variável e atribua valores para cada um dos dados
/*
  name: String
  age: Number (integer)
  stars: Number (float)
  isSubscribed: Boolean
 */

 let name = 'Bruce Wayne';
 let age = 28;
 let stars = 4.5;//número real
 let isSubscribed = true;

 //A variável student abaixo é de que tipo de dados ?
 
 let student = {}// Object is structural primitive

 student = {
     name: 'Bruce Wayne',
     age:28,
     weight:80,
     stars:4.5,
     isSubscribed: true,
 };

 console.log(student);

 //Mostre no console a seguinte mensagem:
    //<name> de idade <age> pesa <weight> kg.

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} Kg.` );

//Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja somente um array vazio

var students = [];

//Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. ( Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array.)

/**
 * 3 Maneiras
 */
students[0] = student;
students = [
    student
]
students.push(student);

console.log(students);

//Coloque no console o valor da posição zero do Array acima
console.log(students[0]);

//Crie um novo student e coloque na posição 1 do Array students

const newStudent = {
    name:'Peter Parker',
    age:18,
    weight:70,
    stars:5,
    isSubscribed: true,
};

/*
 * Duas maneiras 
 */

 students = [
    student,
    newStudent,
]

students[1] = newStudent;

console.log(students);

/*Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se acertou
console.log(a);
var a = 1;
*/
 // Resposta: undefined, Porque var irá sofrer o hoisting e terá seu valor atribuído depois e não antes

console.log(a);
var a = 1;
