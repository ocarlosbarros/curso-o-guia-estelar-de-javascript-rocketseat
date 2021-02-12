//Manipulando String e Arrays

/* Separe um texto que contem espaços, em um novo array onde cada texto é uma posição
 * do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
*/

let sentence = "I want to live the love!"

let sentenceSplit = sentence.split(" ");
console.log(sentenceSplit);

let sentenceWithUnderscore = sentenceSplit.join("_");
console.log(sentenceWithUnderscore); 