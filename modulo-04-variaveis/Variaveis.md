# Variáveis

* Nomes simbólicos para receber algum valor
* Atalhos de código
* Identificadores
* 3 palavras reservadas para criar uma variável
    * var
    * let
    * const

# Tipagem Dinâmica

O JS é uma linguagem fracamente tipada e dinâmica ou seja as variáveis não precisam ter um tipo previamente definido, podemos mudar o conteúdo da variável modificando também o seu tipo

* Exemplos

```
var name = 'Wanda Maximoff'
console.log(typeof name)//string

name = 18
console.log(typeof name)//number

name = true
console.log(typeof boolean)//number

```

## var

```js
// var é global e poderá funcionar fora de um escopo de bloco (hoisting)
console.log('> existe x antes do bloco?', x)
{
    var = x = 0
}

console.log('> existe x depois do bloco? ', x)
```

## let e const

```js
//const e let são locais e só funcionam no escopo onde foram criados
console.log('> existe y antes do bloco?', y)

{
    let y = 0
}

console.log('> existe x depois do bloco', y)
```
