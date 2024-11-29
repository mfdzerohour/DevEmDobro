/*
    SEM PARAMETROS
    function nomeDaFuncao() {
        <bloco de execução>
    }

    SEM PARAMETROS
    nomeDaFuncao();

*/

/*
    COM PARAMETROS
    function nomeDaFuncao(parametro1, parametro2) {
        <bloco de execução>
    }

    COM PARAMETROS
    nomeDaFuncao(parametro1, parametro2);

*/

// function incentivarQuester() {
//     alert("Você chegou ao JS, continue assim!");
// }

// incentivarQuester();

//* ************************************************************* */

// function soma(numero1, numero2) {
//     return numero1 + numero2
// }

// let resultadoDaSoma = soma(1, 3)

// console.log(resultadoDaSoma)

//* ************************************************************* */
// function soma(numero1, numero2) {
//     return numero1 + numero2
// }

// let resultadoDaSoma = soma(1, 3) // 1 + 3
// console.log(resultadoDaSoma) //resultado = 4

// resultadoDaSoma = soma(resultadoDaSoma, 10) // 4 + 10
// console.log(resultadoDaSoma) //resultado = 14

//* ************************************************************* */
//Incentivar o Quester pelo nome, se parametro = ALGO é o valor padrao
function incentivarQuester(nomeQuester = "Quester") {
    alert('Muito bem ' + nomeQuester + ', continue assim!');
}

incentivarQuester('Marcelo');