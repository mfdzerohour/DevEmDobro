// let frutas = ['banana', 'maçã', 'laranja', 'pêra']
// let frutasTamanho = frutas.length //Para pegar o tamanho do array fruta

// for (let i = 0; i < frutasTamanho; i++) {
//     console.log('Frutas: ' + frutas[i])
// }

// ***************************************************************** //
// let frutas = ['banana', 'maçã', 'laranja', 'pêra']
// let frutasTamanho = frutas.length //Para pegar o tamanho do array fruta
//O foreach é usado com array
//ele sempre permite 3 opções : ITEM, INDICE e ARRAY
//não precisa citar os 3 pode deixar somente um
// frutas.forEach(function(item, indice, array){
//     console.log('Frutas: ' + item)
//     // console.log('Frutas: ' + frutas[indice])
//     // console.log(array)
// })
//Trabalhando com um item só
// frutas.forEach(function(item){
//     console.log('Frutas: ' + item)
// })

// ***************************************************************** //
//Trabalhando com arrays
let frutas = ['banana', 'maçã', 'laranja', 'pêra']

console.log('Array original: ' + frutas)

//push adiciona ao final do array
frutas.push('manga');
console.log('Adiciona no ultimo elemento do array (manga) com o push: ' + frutas);

//pop retira o ultimo elemento do array
frutas.pop();

console.log('Exclui o primeiro elemento do array (banana) com o POP: ' + frutas);

//shift retira o primeiro elemento do array
frutas.shift();

console.log('Exclui o primeiro elemento do array (banana) com o shift: ' + frutas);

//unshift adiciona o item no primeiro elemento do array
frutas.unshift('morango');

console.log('Adiciona no primeiro elemento do array (Morango) com o unshift: ' + frutas);

//unshift adiciona o item no primeiro elemento do array
posicaoLaranja = frutas.indexOf('laranja');

console.log('Mostra a posição que um item esta na lista usando o indexof (nomeASerLocalizadoNaLIsta), lembrando que o array começa no 0, 1, 2, 3...: ' + posicaoLaranja);
