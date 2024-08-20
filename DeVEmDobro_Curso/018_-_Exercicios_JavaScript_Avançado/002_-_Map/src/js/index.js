let pessoas = [
    {nome: 'Roberto', idade :33},
    {nome: 'Ricardo', idade :33},
    {nome: 'Raphael', idade :27},
    {nome: 'Marcelo', idade :42}
    
]

// let nomeDasPessoas = []
// for (let i = 0; i < pessoas.length; i++){
//     nomeDasPessoas.push(pessoas[i].nome)
// }

// console.log(nomeDasPessoas)

//Usando Map
//Modo Normal
// let nomeDasPessoas = pessoas.map(function(pessoa){
//     return pessoa.nome + " tem " + pessoa.idade + " anos de idade" ;
// })

//Daria para fazer um ArrowFunction de uma forma "simplificada"
let nomeDasPessoas = pessoas.map(pessoa => pessoa.nome + " tem " + pessoa.idade + " anos de idade")
console.log(nomeDasPessoas)