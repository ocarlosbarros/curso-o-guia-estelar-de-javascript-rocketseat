//Apesar de incluir tipo de dados no array, não é boa prática colocar tipo de dados diferentes
const animals = [
    'Leão',
    'Macaco',
    'Cat',
    {
        name:'Gato',
        age:3
    }
]

//Como acessar valores no array
console.log(animals[3].name);

//Tamanho do array
console.log(animals.length);