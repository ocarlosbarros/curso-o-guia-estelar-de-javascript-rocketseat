//Scope determina a visibilidade de alguma variável no javascript

/*
    let e const são locais e só funcionam no escopo onde foram criados, mas const não pode ter seu valor reatribuído
*/

 

/*  Escopo invisível - GLOBAL    */


//var heroine; -> hoisting


/* console.log('Existe hero antes do bloco ? ', heroine);heroine is not defined */

{/* INÍCIO ESCOPO LOCAL   */
    
    /* console.log(heroine) -> Cannot access 'heroine' before initialization - let e const nao recebem hoisting mesmo no mesmo escopo */
    let heroine = 'Mulher Maravilha';
    console.log(heroine);//'Mulher Maravilha só existe dentro do Block statement
}/* FIM ESCOPO LOCAL   */

/* console.log(heroine); -> heroine is not defined - let e const só funcionam no escopo em que foram criados */

const superGirl = 'Supergirl';
// superGirl = 'Powergirl -> Assigment to constant variable'
 console.log(superGirl); 



/*  Escopo invisível - GLOBAL   */


let pokemon = 'squirtle';

{
    pokemon = 'Wartortle';//atualiza a variavel de fora que está no escopo global
    console.log(pokemon);//Wartortle
}

console.log(pokemon);//Wartortle


const pokemonEvolution = 'Charizard';//escopo 1

{
    const pokemonEvolution = 'Charmeleon';//escopo 2
    {
        const pokemonEvolution = 'Charmander';//escopo 3
        console.log(pokemonEvolution);//Charizard
    }
    console.log(pokemonEvolution);//Charmeleon
}

console.log(pokemonEvolution);//Charmander



