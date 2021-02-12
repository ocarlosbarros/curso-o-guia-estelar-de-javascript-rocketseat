/**
 * Operator precedence
 * Precedência de operadores
 */

 /**
  * grouping                                        ()
  * negação, incremento e decremento                ! ++ --        
  * multiplicação e divisão                         * /
  * adição e subtração                              + -
  * relacional                                      > < >= <= 
  * igualdade                                       == !== === !=== 
  * AND                                             &&
  * OR                                              ||
  * condicional                                     ?:
  * assigment (atribuição)                          = += -= *= /= %=
  */

  //()
  console.log( (2 + 5) * 10 )//70

  console.log( 3 > 2 > 1 );//3 > 2 = true, true > 1 como 1 é Truthy  então true > true = false pois true é igual a true