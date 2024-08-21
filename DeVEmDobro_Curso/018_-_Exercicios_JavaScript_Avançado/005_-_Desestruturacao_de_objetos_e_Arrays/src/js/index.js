//DESESTRUTURAÇÃO DE OBJETOS
// let pessoa = { nome: 'Roberto', sobrenome: 'Dias', idade: 33}
// // let pessoa = {`nome: ${Roberto}, sobrenome: ${Dias}, idade: ${{33}}`}
// let nome = pessoa.nome;
// let idade = pessoa.idade;
// let sobrenome = pessoa.sobrenome;

// console.log(nome);
// console.log(idade);

// let pessoa = { 
//     nome: 'Roberto', 
//     sobrenome: 'Dias', 
//     idade: 33
// }

// let {
//     nome: nome, 
//     idade: idade, 
//     sobrenome: sobrenome    
// } = pessoa

//ou

// let {nome: nome, idade: idade, sobrenome: sobrenome} = pessoa

// ou

// nesta forma pode omitir o nome da variavel assim:

// let {nome, idade, sobrenome} = pessoa

// console.log(nome);
// console.log(idade);
// console.log(sobrenome);


//DESESTRUTURAÇÃO DE ARRAYS
const numeros = [1, 2, 3];

const [um, dois, tres] = numeros

//Ele busca pela posição do array, o nome deste array interno pode ser qualquer

//const [morango, carro, avião] = numeros

//como no array original
// const numeros = [1, 2, 3];
// esta assim, lembrando que o array começa no zero

//Ele vai pegar a posição e colocar o valor

// morango = 1[0]
// carro = 2[1]
// aviao = 3[2]

//const [morango, carro, aviao] = numeros
console.log(um);
console.log(dois);
console.log(tres);
