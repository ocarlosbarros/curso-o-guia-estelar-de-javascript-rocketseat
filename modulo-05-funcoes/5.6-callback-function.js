//Callback chamar de volta
//function statement
function sayMyName(name){
    console.log('antes de executar a função callback');
    name();//execuçao da funçao
    console.log('depois de executar a callback');
}

//function declarion
sayMyName(
    () => {
        console.log('Estou em uma callback');
    }
);