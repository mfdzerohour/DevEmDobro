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

let passarCafe = () => console.log('passando café');


ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado).then(passarCafe)
console.log('fazendo café');
