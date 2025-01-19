// ***************************************************************** //
//Como trabalhar com o DOM
// console.log(document)

// //Armazenar o paragrafo em uma variavel
// let p = document.getElementById('paragrafo1')

// // console.log(p)

// ***************************************************************** //
// let inputsPorClasse = document.getElementsByClassName('tag-de-input')

// //Aqui ele busca todos os elementos por classe como o nome sugere
// console.log(inputsPorClasse)

// //Aqui posso escolher um item especifico inputsPorClasse[ITEM]
// console.log(inputsPorClasse[0])

// ***************************************************************** //
// //Busca pela inputPorTag, aqui InputDeviceInfo, poderia ser 
// //H1..H6 e outras...
// let inputPorTag = document.getElementsByTagName('h1')

// console.log(inputPorTag)

// ***************************************************************** //
//Tag pelo atributo "name", ele busca nos INPUT's pelo atributo NAME
let inputPorName = document.querySelectorAll('input[name="email"]')

console.log(inputPorName)
// //Aqui posso escolher um item especifico inputsPorName[ITEM]
// console.log(inputsPorName[0])