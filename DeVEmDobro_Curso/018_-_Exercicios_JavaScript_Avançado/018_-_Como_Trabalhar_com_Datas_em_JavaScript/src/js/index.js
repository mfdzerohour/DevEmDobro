//Pegar datual
// const dataAtual = new Date();
// console.log(dataAtual);

//adição de data
// const umDiaDepois = new Date(dataAtual);
// umDiaDepois.setDate(dataAtual.getDate() + 1);
// console.log(umDiaDepois);

//um mês atras
// const umMesAtras = new Date(dataAtual);
// umMesAtras.setMonth(umMesAtras.getMonth() - 1);
// console.log(umMesAtras);

//Formatar data
// const dataAtual = new Date();
// const opcoes = {
//     year: 'numeric',
//     month: 'numeric',
//     day: 'numeric'
// };

// const dataFormatada = dataAtual.toLocaleDateString('pt-BR', opcoes);
// console.log(dataFormatada);

const dataAtual = new Date();
const opcoes = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

const formatador = new Intl.DateTimeFormat("pt-BR", opcoes);
const dataFormatada = formatador.format(dataAtual);

console.log(dataFormatada);
