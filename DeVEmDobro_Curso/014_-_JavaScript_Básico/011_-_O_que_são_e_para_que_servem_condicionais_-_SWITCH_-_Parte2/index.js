/*
    SWITCH

    switch(parametro){
        case valor1:
            <bloco de declaração>
            break
        case valor2:
            <bloco de declaração>
            break
            .
            .
            .
        case valor100:
            <bloco de declaração>
            break
    }
*/

// let nomeFilme = 'RoboCop'

// switch (nomeFilme) {
//     case "Vingadores":
//         console.log("É o filme dos vingadores")
//         break
//     case "Batman vs Superman":
//         console.log("É o filme do Batman vs Superman")
//         break
//     case "Aquaman":
//         console.log("É o filme do Aquaman")
//         break
//     default:
//         console.log("Não encontrado o filme no catálogo")
//         break
// }

let avaliacao = 3

switch (avaliacao) {
    case 1:
    case 2:
        console.log("Filme ruim")
        break
    case 3:
    case 4:
        console.log("Filme mediano")
        break
    case 5:
        console.log("Filme Excelente")
        break
    default:
        console.log("Nota inválida! Informe um valor entre 1 e 5")
        break

}