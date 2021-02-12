//Control Flow = Fluxo de controle

//if... else 

let Enemy = {};

Enemy = {
    action: function(action){
        if ( action === 1){
            return 'attack';
        }else{
            return 'defense';
        }
    }
};

let isAttacking = Enemy.action(0) === 'attack';


if ( isAttacking ){
    console.log('Defender do ataque inimigo!');

} else {
    console.log('Atacar o inimigo!');
}