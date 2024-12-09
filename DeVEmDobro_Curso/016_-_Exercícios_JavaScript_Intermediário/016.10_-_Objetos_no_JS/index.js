//Estou instanciando um objeto
let tenis = {
    //Propriedades
    //CHAVE: VALOR
    cor: 'branco',
    tamanho: 42,
    emEstoque: true
}

//Da para criar uma nova propriedade após ele ser criado, não sei se é uma boa prática, já que
//vai ficar com propriedades separadas pelo código, mas isto é só usando e praticando.
tenis.valor = 200

//Para acessar a propriedade nomeObjeto.propriedade
//ou assim nomeObjeto['propriedade'] neste caso  com aspas duplas ou simples
console.log(tenis.cor)