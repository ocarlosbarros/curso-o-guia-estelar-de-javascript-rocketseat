const calculator = function( number_1, operator, number_2){
    let result;
    
    switch (operator){
        case '+':
        result = number_1 + number_2;
        break;

        case '-':
        result = number_1 - number_2;
        break;

        case '*':
        result = number_1 * number_2;
        break;

        case '/':
        let isDivisible = divisionByZeroValidation(number_2)
        if ( isDivisible ){
            result = number_1 / number_2;
        }else{
            result = 'Não é possível dividir por zero!';
        }
        break;

        default:
        console.log('Função não disponível, operador inválido.');
        break;
    }

    return result;
}

function divisionByZeroValidation(value){
    if ( value === 0 ){
        return false;
    }else{
        return true;
    }
}

console.log(calculator(8, '/', 0));