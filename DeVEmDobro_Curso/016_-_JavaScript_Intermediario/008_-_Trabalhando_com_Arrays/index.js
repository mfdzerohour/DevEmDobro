// let filmes =    [
//                     ['Vingadores', 4.5, true],
//                     ['Mulher Maravilha', 4.6, true],
//                     ['Spider-Man', 4.8, true]
//                 ]
// console.table(filmes)


let filmes =    [
    ['Vingadores', 4.5, true, ['Hulk', 54]],
    ['Mulher Maravilha', 4.6, false, ['Gal Gadot', 25]],
    ['Spider-Man', 4.8, true, ['Tom Holland', 28]]
]
// console.table(filmes[0])
console.table(filmes[1][3][0],filmes[1][3][1], filmes[1][0])
