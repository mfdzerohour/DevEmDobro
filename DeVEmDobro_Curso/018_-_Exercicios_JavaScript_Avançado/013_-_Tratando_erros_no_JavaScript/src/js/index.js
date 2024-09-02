let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if(typeof chaleiraEstaNoFogao != 'boolean' || typeof fogaoEstaLigado != 'boolean') throw "somente o tipo booleano é aceito"

        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('Passo 1 finalizado: Água foi fervida');
            resolve();
        } else {
            let mensagemDeErro = 'É necessário colocar a chaleira com água e ligar o fogão senão teu cafézinho não vai ficar pronto nunca.'
            reject(mensagemDeErro);
        }
    });
};

let passarOCafe = (aguaFervida) => {
    return new Promise(resolve => {
        console.log('Passo 2 finalizado: Café foi passado');
        resolve(true);
    })
};

let tomarCafe = (cafePassado) => {
    return new Promise(resolve => {
        console.log('Passo 3 finalizado: Terminei o café');
        resolve(true);
    })
};

let lavarXicara = (cafeTomado) => {
    return new Promise(resolve => {
        console.log('Passo 4 finalizado: Terminei de lavar a xícara');
        resolve(true);
    })
};

chaleiraEstaNoFogao = true;
fogaoEstaLigado = true;

async function iniciarProcessoDeFazerCafe(){
    try {
        const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado);
        const cafePassado = await passarOCafe(aguaFervida);
        const cafeTomado = await tomarCafe(cafePassado);
        const xicaraLavada = await lavarXicara(cafeTomado);
        // if (xicaraLavada) {
        //     console.log ('Finalizado o ritual de tomar café, bora trabalhar')
        // }
    } catch(error){
        console.log(error)
    } //finally {
    //         // if (xicaraLavada) {
    //         //     console.log ('Finalizado o ritual de tomar café, bora trabalhar')
    //         // }
    //         console.log ('Finalizado o ritual de tomar café, bora trabalhar');
    // }
}

iniciarProcessoDeFazerCafe();