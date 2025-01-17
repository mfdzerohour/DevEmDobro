let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('Passo 1 finalizado: Agua foi fervida!')
            resolve(true);
        } else {
            console.log ('é necessario colocar a chaleira com água e ligar o fogão senão teu caféizinho não vai ficar pronto nunca!')
            reject();
        }
    })
}

let passarOCafe = (aguaFervida) => {
    return new Promise((resolve) => {
            console.log('Passo 2 finalizado: Cafe foi passado!')
            resolve(true)
    })
}

let tomarCafe = (cafePassado) => {
    return new Promise((resolve) => {
        console.log('Passo 3 finalizado: Terminei de tomar o café!')
        resolve(true)
    })
}

let lavarXicara = () => {
    return new Promise((resolve) => {
        console.log('Passo 4 finalizado: Terminei de lavar a xícara!')
        resolve(true)
    })
}

//Desta forma, um dependen do anterior para prosseguir, enquanto não termina, não avança
// ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
//                                                 .then(() => {
//                                                     return passarOCafe();
//                                                 })
//                                                 .then(() => {
//                                                     return tomarCafe();
//                                                 })
//                                                 .then(() => {
//                                                     return lavarXicara();
//                                                 })
//                                                 .then(() => {
//                                                     console.log('Finalizado o ritual do café, bora trabalhar!');
//                                                 });

/* ****************************************************************************************** */

//Na parte de cima é feita com o THEN, aqui vamos fazer a mesma coisa com ASYNC e AWAIT
//Para fazer uma função ficar ASSINCRONA usa o ASYNC antes da palavra FUNCTION

//await fica aguardando até que tenha o resultado e retorne o mesmo, ou seja await espera até estar no resultado resolvido
async function inicarProcessoDeFazerCafe(){
    const  aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    const cafePassado = await passarOCafe(aguaFervida) //Porque depende da agua estar fervida para passar o cafe
    const cafeTomado = await tomarCafe(cafePassado)
    const xicaraLavada = await lavarXicara(cafeTomado)

    if(xicaraLavada) console.log('Finalizado o ritual do Café, bora trabalhar!');
}

inicarProcessoDeFazerCafe();