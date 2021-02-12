//function sofrendo o hoisting

sayYourName('Clark Kent');

function sayYourName(name){
    return console.log(name);
}



//function expression náo sofre hoisting com let nem const -> Cannot acess sayMyName before initialization
sayMyName();

const sayMyName = function(){
    console.log('Diana Prince.');
}

// var sleep; -> hoisting do var

sleep();//sleep is not a function

var sleep = function(){
    console.log('Zzzz');
}


