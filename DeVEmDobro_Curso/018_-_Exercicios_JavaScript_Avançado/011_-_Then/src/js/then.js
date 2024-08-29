let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve) => {
        console.log('Passo 1: Aguarde enquanto a água ferve...');
        setTimeout(() => {
            console.log('Passo 1 finalizado: Água ferveu!');
            resolve(true);
        }, 2000);
    });
};

let passarOCafe = (aguaFervida) => {
    return new Promise(resolve => {
        console.log('Passo 2 finalizado: Café foi passado');
        resolve(true);
    })
}

let tomarCafe = (cafePassado) => {
    return new Promise(resolve => {
        console.log('Passo 3 finalizado: Terminei o café');
        resolve(true);
    })
}

let lavarXicara = (cafeTomado) => {
    return new Promise(resolve => {
        console.log('Passo 4 finalizado: Terminei de lavar a xícara');
        resolve(true);
    })
}

chaleiraEstaNoFogao = true;
fogaoEstaLigado = true;

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
                                                .then(() =>{
                                                    return passarOCafe();
                                                })
                                                .then(() => {
                                                    return tomarCafe();
                                                })
                                                .then(() =>{
                                                    return lavarXicara();
                                                })
                                                .then(() => {
                                                    console.log('Finalizado ritual do café, bora trabalhar');
                                                });