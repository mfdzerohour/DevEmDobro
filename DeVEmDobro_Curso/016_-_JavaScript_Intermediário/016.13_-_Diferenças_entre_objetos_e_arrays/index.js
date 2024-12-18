//Arrays é assim que se chama um de frutas
let frutas = ['uva', 'banana', 'melão']

//Assim que monta um objetos e suas propriedades
//objeto
let videoGame = {
    //Propiedades
    nome: 'Xbox',
    valor: 3000
}

let videoGame2 = {
    //Propiedades
    nome: 'Playstation 5',
    valor: 5000
}

//Array com objetos dentro
//videoGames é o array e o que esta dentro é os objetos 
//(e suas propriedades)
let videoGames = [videoGame, videoGame2]

//Vendo o que esta dentro do array
console.log(videoGames)

//Pegando o nome do ARRAY[POSICAO_ARRAY].propriedade_do_objeto 
//dentro array
console.log(videoGames[1].nome)