let pessoas = [
    {nome: 'Roberto', idade :33},
    {nome: 'Ricardo', idade :33},
    {nome: 'Raphael', idade :27},
    {nome: 'Marcelo', idade :42}
    
]

//Forma Normal
// let pessoasComIdadeDe33Anos =[]
// for (let i = 0; i < pessoas.length; i++) {
//     if(pessoas[i].idade === 33){
//         pessoasComIdadeDe33Anos.push(pessoas[i]);
//     }
// }

// console.log(pessoasComIdadeDe33Anos);

//Usando Filter
//Modo Normal
// let pessoasComIdadeDe33Anos = pessoas.filter(function(pessoa){
//     return pessoa.idade === 33;
// })

//Daria para fazer um ArrowFunction de uma forma "simplificada"
let pessoasComIdadeDe33Anos = pessoas.filter(pessoa => pessoa.idade === 33)

console.log(pessoasComIdadeDe33Anos)
