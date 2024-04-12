let nomeFilme = "Alice no País das Maravilhas"

if (nomeFilme === 'Vingadores') {
    console.log("É o filme dos Vingadores")
}else if(nomeFilme === "Batman vs Superman"){
    console.log("É o filme do Batman vs Superman")
}else if(nomeFilme === "Capitão America"){
    console.log("É o filme do Capitão America")
}else{
    console.log("É outro filme, o nome do filme é: " + nomeFilme)
}

//COndição Ternária

/*
    condicao ? (Valor quando Verdadeiro) : (Valor quando Falso)
*/

nomeFilme = 'Vingadores'

nomeFilme === 'Vingadores' ? console.log("É o filme dos vingadores") : console.log("É outro filme")