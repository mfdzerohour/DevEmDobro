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
            reject()
        }
    })
}

//No caso da promise, ele não vai esperar para excutar a linha do console.log('fazendo café'), ele execcuta ela, é tipo assinc
ferverAgua(chaleiraEstanoFogao, fogaoEstaLigado)
console.log('fazendo café')