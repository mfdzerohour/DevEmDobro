//FORMATO REST
//O parametro REST tem que ser o ultimo argumento da função

//function (a, b, ...args) {
//  COMANDOS
//}

/* *********************************************************************************************** */

// function incentivarQuester(mensagem, nomeQuester){
//     console.log(`${mensagem} ${nomeQuester}`);
// }

// incentivarQuester("Parabéns por ter chego ao módulo de JavaScript avançado,","Marcelo")

/* *********************************************************************************************** */

//REST - vai fazer a mesma coisa do comando acima, só que vou ter transformado o nome dos 
// usuário em varios outros
//O parametro REST tem que ser o ultimo argumento da função

// function incentivarQuester(mensagem, ...nomesQuesters){
//    console.log(nomesQuesters);
//     console.log(`${mensagem} ${nomesQuesters}`);
// }

// incentivarQuester("Parabéns por ter chego ao módulo de JavaScript avançado,","Roberto"
// ,"Ricardo","Raphael")

/* *********************************************************************************************** */

//O parametro REST tem que ser o ultimo argumento da função

function incentivarQuester(mensagem, ...nomesQuesters){
    console.log(nomesQuesters);
    nomesQuesters.map((nomeQuester) => console.log(`${mensagem} ${nomeQuester}`));
    
}

incentivarQuester("Parabéns por ter chego ao módulo de JavaScript avançado,","Roberto","Ricardo","Raphael")