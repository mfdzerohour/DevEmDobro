// const pessoas = ['Roberto', "Ricardo", "Raphael"]
// console.log(pessoas)

/* ***************************************************************** */

//CONCATENAR DOIS ARRAYS
// let pessoas1 = ['Roberto', 'Ricardo', 'Raphael']
// let pessoas2 = ['Pedro', 'João','Maria']

//pessoas1 = pessoas1.concat(pessoas2)

//SPRED sempre começa ... dentro do array
// pessoas1 = [...pessoas1, ...pessoas2]

// console.log(pessoas1)

/* ***************************************************************** */

//CLONAR OBJETO
//Vantagem é que pode mexer sem alterar o original
const pessoas1 = {nome: 'Roberto', idade: 33}
const pessoas2 = {nome: "Ricardo", idade: 32}

const objetoClonado = {...pessoas1}

console.log(objetoClonado)