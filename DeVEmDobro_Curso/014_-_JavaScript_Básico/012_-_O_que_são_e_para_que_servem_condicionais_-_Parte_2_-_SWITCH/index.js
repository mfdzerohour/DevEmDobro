// switch(parametro) {
//     case valor1:
//         bloco de códig  que vai ser rodado    
//         break;
//     case valor2:
//         bloco de códig  que vai ser rodado    
//         break;
//     default:
//         bloco de códig  que vai ser rodado    
//         break;
// }

// let nomeFilme = "Alice no pais das maravilhas";

// switch(nomeFilme) {
//     case "Vingadores":
//         console.log("É o filme dos vingadores");
//         break;
//     case "Batman vs Superman":
//         console.log("É o filme do Batman vs Superman");
//         break;
//     default:
//         console.log("É outro filme");
//         break;
// }

//Desta forma só funciona com numeros inteiros
// let avaliacao = 1.2;

// switch (avaliacao) {
//     case 1:
//     case 2:
//         console.log("Filme ruim");
//         break;
//     case 3:
//     case 4:
//         console.log("Filme mediano");
//         break;
//     case 5:
//         console.log("Filme bom");
//         break;
//     default:
//         console.log("Classificação não conhecida, nota invlida");
//         break;
// }

let avaliacao = 5;

switch (true) {
    case avaliacao >= 1 && avaliacao < 3:
    
        console.log("Filme ruim");
        break;
    case avaliacao >= 3 && avaliacao < 5:
        console.log("Filme mediano");
        break;
    case avaliacao == 5:
        console.log("Filme bom");
        break;
    default:
        console.log("Classificação não conhecida, nota inválida");
        break;
}