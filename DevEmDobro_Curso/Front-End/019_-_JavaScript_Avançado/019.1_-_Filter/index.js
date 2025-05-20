// let pessoas = [
//                 {nome: 'Roberto', idade: 33},
//                 {nome: 'Ricardo', idade: 33},
//                 {nome: 'Maria', idade: 25},
//                 {nome: 'Joaquim', idade: 19},      
//             ]

// let pessoasComIdadeDe33Anos = []

// for (let i = 0; i < pessoas.length; i++) {
//     if(pessoas[i].idade === 33){
//         pessoasComIdadeDe33Anos.push(pessoas[i]);
//     }
// }

// console.log(pessoasComIdadeDe33Anos)

/* ***************************************************************** */

let pessoas = [
                {nome: 'Roberto', idade: 33},
                {nome: 'Ricardo', idade: 33},
                {nome: 'Maria', idade: 25},
                {nome: 'Joaquim', idade: 19},      
            ]

// //Na function ele retorna as pessoas
// let pessoasComIdadeDe33Anos = pessoas.filter(function(pessoa){
//     //console.log(pessoa.idade)
//     return pessoa.idade === 33
    
// })

// //Na function ele retorna as pessoas com arrow function
// let pessoasComIdadeDe33Anos = pessoas.filter((pessoa) =>{
//     //console.log(pessoa.idade)
//     return pessoa.idade === 33
// })

//Na function ele retorna as pessoas com arrow function (resumida)
let pessoasComIdadeDe33Anos = pessoas.filter((pessoa) => pessoa.idade === 33)

console.log(pessoasComIdadeDe33Anos)