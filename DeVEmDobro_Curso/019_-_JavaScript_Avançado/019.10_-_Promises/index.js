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
            reject()
        }
    })
}

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
console.log('Fazendo café')