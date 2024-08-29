// function (a, b, ...args) {
//     // ...
// }

// function incentivarQuester(mensagem, nomeQuester) {
//     console.log(`${mensagem} ${nomeQuester}`);
// }

// incentivarQuester('Parabéns por ter chego no módulo de JavaScript avançado,', 'João')

//Transforma o nomeQuester em um REST ...NOME
function incentivarQuester(mensagem, ...nomeQuesters) {
    //faz um MAP
    nomeQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
    
}

//É interessante observar que o paramentro quester ficam sempre por ultimo, e pode ver que estamos passando uma mensagem e depois varios nomes (REST), não tem limite para o nomeQuesters(REST), sempre vai exibir a mensagem e o nome informado
incentivarQuester('Parabéns por ter chego no módulo de JavaScript avançado,', 'João', 'Pedro', 'Marcelo')