//Forma normal como é feito a declaração no JS sem desestruturação
// let pessoa = {nome: 'Roberto', Sobrenome: 'Dias',idade: 33};
// let nome = pessoa.nome;
// let idade = pessoa.idade;

// console.log(nome);
// console.log(idade);

// ********************************************************************************************* //

//Forma com desestruturação
let pessoa = {nome: 'Roberto', sobrenome: 'Dias',idade: 33};
//Isto não funciona, vou verificar o motivo se funcionar vou corrigir depois
// let pessoa = {`nome: ${Roberto}, idade: ${33}`};
// let {nome: nome, idade: idade} = pessoa;
//Também funciona com os campos apenas sem a declaração do objeto
let {nome, idade, sobrenome} = pessoa;

console.log(nome);
console.log(idade);
console.log(sobrenome);

// ********************************************************************************************* //

// // Desestruturação de arrays
// const numeros = [1, 2 ,3];

// //Desta forma estou desestruturando o array
// //aqui ele se baseia no indice do array e mapeia aqui
// // um, dois , tres poderia ser qualquer nome
// const [um , dois, tres] = numeros;

// console.log(um)
// console.log(dois)
// console.log(tres)
// console.log(numeros) // array normal