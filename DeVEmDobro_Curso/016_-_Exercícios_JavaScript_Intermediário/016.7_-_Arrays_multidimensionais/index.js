// let filmes = ['Vingadores', 'Mulher Maravilha']
// //Teriamos este array simples
// let descricao = ['Vingadores', 4.5, true , 'Mulher Maravilha', 4.6, false]

//Mas podemos ter arrays dentro de arrays chamado de array multidimensional
//Colocando [['Descricao', 'Avaliação', 'Disponibilidade'], ['Descricao', 'Avaliação', 'Disponibilidade']]
let filmes =[
                ['Vingadores', 4.5, true] , 
                ['Mulher Maravilha', 4.6, false, ['Gal Gadot', 25]]
            ]

//Para mostrar o array multidimensional podemos usar o console.table
//ao invez de console.log
// console.table(filmes)

//Pegar dados do console.table
//console.log(filmes[QualArray][Qual Posição dentro dele])
// console.table(filmes[0][0])

//Se quiser tudo dentro de um array pode fazer
console.table(filmes[1][3][0])