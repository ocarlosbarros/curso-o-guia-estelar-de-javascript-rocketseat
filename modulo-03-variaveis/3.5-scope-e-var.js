//Scope determina a visibilidade de alguma variável no javascript
 

/*  Escopo invisível - GLOBAL    */


//var hero; -> hoisting


console.log('Existe hero antes do bloco ? ', hero);//hero existe mas é undefined -> hoisting = a declaração de var na linha 15 sofre uma elevação e é declarada internamente antes dessa linha ( código comentado linha 7 )

{/* INÍCIO ESCOPO LOCAL   */
    
    //var é global e, tambél local
    var hero = 'Batman';
    console.log(hero);//hero = 'Batman só existe dentro do Block statement

}/* FIM ESCOPO LOCAL   */

hero = 'Spider-man';//
console.log(hero);//Spider-man


/*  Escopo invisível - GLOBAL   */

