// const dataAtual = new Date();
// const dia = dataAtual.getDate();
// const mes = dataAtual.getMonth() +1;
// const ano = dataAtual.getFullYear();

// // console.log(dataAtual);
// console.log(dia);
// console.log(mes);
// console.log(ano);

/* *************************************************************************** */
//Calculando data de aniversario baseada no ano de nascimento e ano atual

// //Caclculando a data de nascimento
// const dataNascimento = new Date('1982-09-19');
// const dataAtual = new Date();

// //Calculano a diferença em milissegundos
// const diferencaEmMilissegundos = dataAtual - dataNascimento;

// //convertendo a diferença para anos
// const idade = Math.floor(diferencaEmMilissegundos / (365.25 * 24 * 60 * 60 * 1000));
// console.log(idade)

/* *************************************************************************** */

// function calcularIdade(dataNascimento) {
//     const dataAtual = new Date();
//     const diferencaEmMilissegundos = dataAtual - dataNascimento;
//     const diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

//     const anos = Math.floor(diferencaEmDias / 365.25);
//     const meses = Math.floor((diferencaEmDias - (anos * 365.25)) / 30.44);
//     const dias = diferencaEmDias - (anos * 365.25) - (meses * 30.44);

//         return { anos, meses, dias };
// }

//     // Exemplo de uso:
//     const dataDeNascimento = new Date('1982-09-19');
//     const { anos, meses, dias } = calcularIdade(dataDeNascimento);
//     console.log(`Você tem ${anos} anos, ${meses} meses e ${dias} dias.`);

/* *************************************************************************** */
//Desta forma ele formata a data para o formato brasileiro - forma simples
// const dataAtual = new Date();
// const dataFormatada = dataAtual.toLocaleDateString('pt-BR');

// console.log(dataFormatada);

/* *************************************************************************** */
//Formatar data usando API do JavaScript Intl

const dataAtual = new Date();

//Forma curta 21/01/2025
// const formato = new Intl.DateTimeFormat('pt-BR')

//Forma Longa 21/01/2025
const formato = new Intl.DateTimeFormat('pt-BR', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})
const dataFormatadaIntl = formato.format(dataAtual);
console.log(dataFormatadaIntl);
/* *************************************************************************** */