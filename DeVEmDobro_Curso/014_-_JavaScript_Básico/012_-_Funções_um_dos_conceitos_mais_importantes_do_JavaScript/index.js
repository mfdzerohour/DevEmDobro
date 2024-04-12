/*
    function nomeDaFuncao(){
        <bloco de execucao>
    }

    nomeDaFuncao()
*/

/*
    function nomeDaFuncao(parametro1, parametro2, ...){
        <bloco de execucao>
    }

    nomeDaFuncao(parametro1, parametro2)
*/

// function incentivarQuester(){
//     alert("Você chegou ao JavaScript (JS), continue assim!");
// }

// incentivarQuester();


//Função com parametros
// function soma(numero1, numero2){
//     return numero1 + numero2;
// }

// let resultadoDaSoma = soma(10, 6)

// alert(resultadoDaSoma)

// resultadoDaSoma = soma(resultadoDaSoma, 20)

// alert(resultadoDaSoma)


function incentivarQuester(nomeQuester = 'Quester'){
    alert("Muito bem " + nomeQuester + " você chegou ao JavaScript (JS), continue assim!");
}

// var nome = prompt("Informe o seu nome")

// if(nomeQuester == ""){
//     incentivarQuester(nome)
// }else{
//     incentivarQuester()
// }

incentivarQuester()