/**
 *  ### Celsius em Fahrenheit e Fahrenheit em Celsius
 *  
 * Crie uma funçãp que receba uma string em celsius ou fahrenheit e faça
 * a transformação de uma unidade para outra
 *
 *  C = ( F - 32 ) * 5/9
 *  F = C * 9/5 + 32
 * */

function converterDegree(degree){
    
    let celsiusExists = degree.toUpperCase().includes('C');
    let fahrenheitExists = degree.toUpperCase().includes('F');
        
    if ( !celsiusExists && !fahrenheitExists){
        throw new Error('Grau não identificado.')
    }

    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9;
    let degreeSign = 'C';

    if ( celsiusExists ){
    updatedDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = celsius => celsius * 9/5 + 32;
    degreeSign = 'F';
    }
    return formula(updatedDegree) + degreeSign;
}

try {
    console.log(converterDegree('10C'));
    console.log(converterDegree('50F'));

}catch(error){
    console.log(error.message);
}