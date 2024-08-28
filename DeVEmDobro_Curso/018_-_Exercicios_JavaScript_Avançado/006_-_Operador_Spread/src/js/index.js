const pessoas = ["Roberto", "Ricardo", "Raphael", "Marcelo"]
console.log(...pessoas)

/* CONCATENAR DOIS ARRAYS */
// const pessoas1 = ["Roberto", "Ricardo", "Raphael"]
// const pessoas2 = ["Pedro", "João", "Paulo"]

//Este era usado antes
//pessoas1 = pessoas1.concat(pessoas2)

//Agora é usado assim
// pessoas1 = [...pessoas1, ...pessoas2]


/* CLONAR OBJETO */
const pessoa1 = { nome: 'Roberto', idade: 32}
const pessoa2 = { nome: 'Marcelo', cidade: 42}

const objetoClonado = {...pessoa1}
console.log(objetoClonado);
console.log(pessoa1)
