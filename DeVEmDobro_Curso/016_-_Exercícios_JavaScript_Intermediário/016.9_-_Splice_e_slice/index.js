// // arr.slice([inicio[,fim PODE OU NÂO TER UM FIM]])
// let frutas = ['banana', 'maçã', 'laranja', 'uva']

// //da forma abaixo ele vai pegar do 1 ao 3(-1), se não tiver o 3 
// //ele vai pegar do 1 ao fim
// let frutasExtraidas = frutas.slice(1, 3)

// //Ele faz uma copia do array original
// console.log(frutasExtraidas)

// //O array original nao foi afetado
// console.log(frutas)

// ***************************************************************** //

// arr.slice([inicio[,fim PODE OU NÂO TER UM FIM]])
let frutas = ['banana', 'maçã', 'laranja', 'uva']

// frutas.splice(Posição para remover, remover quantos itens (-1))
// Só que ele remove o item do array original
// let frutasExtraidas = frutas.splice(1,2)

// console.log(frutasExtraidas)
// console.log(frutas)

//remover e adicionar itens
//Começa no item 1 e conta 2 (Maça e Laranja) e substitua estas 
//frutas por estas novas
let removeEAdicionaFrutas = frutas.splice(1, 2, 'goiaba', 'abacaxi', 'pêra')

//Ele adicionou as frutas ao array e retirou as frutas que fivam 
//na posição 1 até 2
console.log(frutas)
//Mostra as frutas removidas
console.log(removeEAdicionaFrutas)