//throw - disparar, lançar

function sayMyName(name = ''){
    if ( name === '' ){
        throw new Error("Nome é obrigatório");
    }
    console.log(name);
}


//try... catch
try {
    sayMyName('Diana')
} catch(e){
    console.log(e);
}

console.log('Após o try catch!')
