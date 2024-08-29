/*
ESTADOS DOS PROMISES:
    1 - Pendente
    2 - Realizada (resolve)
    3 - Recusada (reject)
    4 - Estabelecida
*/

// new Promise((resolve, reject) => {
    
// })

let ferverAgua = function(chaleiraEstaNoFogao, fogaoEstaLigado){
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('começando o processo de ferver agua');
            resolve();
        } else {
            console.log('é necessario ligar o fogão e colocar a chaleira no fogão para ferver a água');
            reject();
        }
    })
}

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
console.log('fazendo café');
