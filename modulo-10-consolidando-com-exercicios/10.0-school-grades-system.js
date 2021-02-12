/**
 * ### Transformar notas escolares
 * 
 * Crie um algoritmo que transforme as notas do sistema
 * númerico para sistema de notas em caracteres tipo A B C
 * 
 *  * de 90 para cima - A
 *  * entre 80 - 89 - B
 *  * entre 70 - 79 - C
 *  * entre 60 - 69 - D
 *  * menor que 60 - F
 */

let grade = 0;

const GREATER_THAN_NINETY = grade >= 90 && grade <= 100;
const BETWEEN_EIGHTY_AND_EIGHTY_NINE = grade >= 80 && grade <= 89;
const BETWEEN_SEVENTY_AND_SEVENTY_NINE = grade >= 70 && grade <= 79;
const BETWEEN_NINETY_AND_NINETY_NINE = grade >= 60 && grade <= 69;
const  LESS_THAN_SIXTY = grade >= 0 && grade < 60; 

function rankGrade(grade) {

    let finalGrade;

    if ( GREATER_THAN_NINETY ) {
        finalGrade  = 'A';
    }else if ( BETWEEN_EIGHTY_AND_EIGHTY_NINE ){
        finalGrade = 'B';
    }else if ( BETWEEN_SEVENTY_AND_SEVENTY_NINE ){
        finalGrade = 'C';
    }else if ( BETWEEN_NINETY_AND_NINETY_NINE ){
        finalGrade = 'D';
    }else if ( LESS_THAN_SIXTY ){
        finalGrade = 'F';
    }else{
        finalGrade = 'Nota inválida.';
    }

    return finalGrade;
}

console.log(rankGrade(grade));