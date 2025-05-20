let chaleiraEstaNoFogao = 'teste'
let fogaoEstaLigado = true

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {

        if(typeof chaleiraEstaNoFogao != 'boolean') throw 'Somente o tipo boleano é aceito'

        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('Passo 1 finalizado: Agua foi fervida!')
            resolve(true);
        } else {
            const mensagemErro = ('é necessario colocar a chaleira com água e ligar o fogão senão teu caféizinho não vai ficar pronto nunca!')
            // console.log(mensagemErro)
            reject(mensagemErro);
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
    //try = tentar, ele vai verificar se tem algum erro neste trecho de código, 
    // e caso tenha ele vai executar o catch
    try{
        const  aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
        const cafePassado = await passarOCafe(aguaFervida) //Porque depende da agua estar fervida para passar o cafe
        const cafeTomado = await tomarCafe(cafePassado)
        const xicaraLavada = await lavarXicara(cafeTomado)

        // if(xicaraLavada) console.log('Finalizado o ritual do Café, bora trabalhar!');
    } catch (error) { //Catch = pegar em portugues
        console.log(error)
    } finally { //Este sempre vau ser executado independente de ter rodado o try ou o catch!
        //Geralmente é usado para fechar arquivo ou conexão de banco de dados
        console.log('Finalizado o ritual do Café, bora trabalhar!');
    }
}

inicarProcessoDeFazerCafe();