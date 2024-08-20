let ordens = [
    {nome: 'Roberto', tipo: 'compra', quantidade: 56, ativo: 'NFLX34'},
    {nome: 'Ricardo', tipo: 'compra', quantidade: 76, ativo: 'AAPL34'},
    {nome: 'Raphael', tipo: 'venda', quantidade: 21, ativo: 'GOGL34'},
    {nome: 'Marcelo', tipo: 'compra', quantidade: 112, ativo: 'PETR4'}
]

// let quantidadeDeOrdens = 0
// for (let i = 0; i < ordens.length; i++){
//     quantidadeDeOrdens += ordens[i].quantidade
// }

// console.log(quantidadeDeOrdens)

//Forma Normal
// let quantidadeDeOrdens = ordens.reduce(function(somaDasOrdens, ordem){
//     console.log('Ordem', somaDasOrdens, ordem)
//     return somaDasOrdens + ordem.quantidade
// },0)

// console.log(quantidadeDeOrdens)

//Forma reduzida
let quantidadeDeOrdens = ordens.reduce((somaDasOrdens, ordem) => somaDasOrdens + ordem.quantidade,0)

console.log(quantidadeDeOrdens)