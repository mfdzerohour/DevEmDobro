//Ambos são comandos assincronos.
// Quer dizer que ele vai executar e depois de um tempo ele executa 
// o setTimeout ou setInterval

// Este é executao apenas uma vez
// setTimeout(function(){
//     COMANDOS
// }, tempo em milisegundos)

/* ****************************************************************** */

// Este é executao apenas uma vez
// setTimeout(() => {
//     console.log('executando a cada 4 segundos')
// }, 4000);

// console.log('console depois do setTimeout')

/* ****************************************************************** */

// Este é executao em loop de tempo em tempo
// setInterval(function(){
//     COMANDOS
// }, tempo em milisegundos)

// setInterval(() => {
//     alert('Olá mundo!')
// }, 3000);

/* ****************************************************************** */
let idDoIntervalo = setInterval(() => {
    console.log('Executando a cada 2 segundos');
}, 2000);

console.log(idDoIntervalo);
clearInterval(idDoIntervalo); //Para o setInterval
clearTimeout(idDoIntervalo); //Para o setTimeout