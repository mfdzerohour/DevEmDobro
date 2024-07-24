//O slice não remove o item do array original
// let frutas = ['Banana', 'Maça', 'Laranja', 'Uva']

//let frutasExtraidas = frutas.slice(1,3) //Corta da posição 1 até antes 3

// let frutasExtraidas = frutas.slice(1) //Corta a partir da posição 1

// alert(frutasExtraidas)
//alert(frutas)



//O splice remove o item do array original
// let frutas = ['Banana', 'Maça', 'Laranja', 'Uva']

// let frutasExtraidas = frutas.splice(1, 2)

// console.log(frutasExtraidas)
// console.log(frutas)

//remove e adiciona o item
let frutas = ['Banana', 'Maça', 'Laranja', 'Uva']
let removeEAdicionaFrutas = frutas.splice(1, 2, 'Goiaba', 'Abacaxi', 'Perâ')

console.log(frutas)
console.log(removeEAdicionaFrutas)