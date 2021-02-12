//Function Scope

let subject = 'create video';

function createThink(subject){
    subject = 'study';//Este subject nao esta sobreescrevendo o subject = 'create video', e sim o subject do parametro!!! Quando existe um parametro existe uma nova variavel dentro da funçao
    return subject;
}

console.log(createThink(subject));
console.log(subject);


let think = 'Think something';

function createOtherThink(){
    think = "Let's watch a movie!";//Este think está sobreescrevendo o think = 'Think something', Quando não existe um parametro na declaracao a variável interna refere-se a variável do escopo acima
    return think;
}

console.log(createOtherThink(think));//Let's watch a movie -> nao importa passar ou nao um parametro já que na declaracao da funçao um parametro nao é necessário
console.log(think);////Let's watch a movie -> Como nao a parametro o valor de think é atualizado dentro da funcao