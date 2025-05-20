<<<<<<< HEAD
/*
O Promisses tem quatro estados:
- Pendente (pending) - Inicialmente todas são pendentes
- Realizada (resolve)
- Rejeitada (reject)
- Estabelecida (established)

** Esqueleto da Promise **
new Promise (() => {
    INSTRUÇÔES / COMANDOS
})
*/

// //Promise é uma classe em JS e classe se escreve com a primeira 
// // letra em maisuculo
// new Promise((resolve, reject) => {

// })

let chaleiraEstaNoFogao = false
let fogaoEstaLigado = true

let ferverAgua = function(chaleiraEstaNoFogao, fogaoEstaLigado){
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('Começando o processo de ferver água')
            resolve()
        } else if (chaleiraEstaNoFogao && !fogaoEstaLigado){
            console.log('É necessário ligar o fogão e colocar a chaleira no fogão para ferver a agua')
            reject()
        } else {
            console.log('É necessário colocar a chaleira no fogão para ferver a agua, o fogão já esta ligado')
=======
//Promeses tem 4 estados
/*
Pendente - É o estado inicial de toda promise
Realizada - Resolve
Recusada - Reject
Estabelecida - é o resultado que ela foi ou Realizada ou Recusada
*/

//A promisse sempre com o P maisculo por ser uma classe de JavaScript
//new Promise((resolve, reject) => {
    //function(RESOLVE ou REJECT)
//})

let chaleiraEstanoFogao = true
let fogaoEstaLigado = false

let ferverAgua = function(chaleiraEstanoFogao, fogaoEstaLigado){
// let ferverAgua = (chaleiraEstanoFogao, fogaoEstaLigado) => { //também faz am esma coisa
    //Quando queremos que retorne algo temos que colocar o return
    return new Promise((resolve, reject) => {
        if (chaleiraEstanoFogao && fogaoEstaLigado){
            console.log('começando o processo de ferver água')
            resolve()
        } else {
            console.log('é necessario ligar o fogão e colocar a chdlaeira no fogão para ferver a água')
>>>>>>> 21e054efd3ce98776e2a04cec42fd5c6b7cdfe5e
            reject()
        }
    })
}

<<<<<<< HEAD
ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
console.log('Fazendo café')
=======
//No caso da promise, ele não vai esperar para excutar a linha do console.log('fazendo café'), ele execcuta ela, é tipo assinc
ferverAgua(chaleiraEstanoFogao, fogaoEstaLigado)
console.log('fazendo café')
>>>>>>> 21e054efd3ce98776e2a04cec42fd5c6b7cdfe5e
