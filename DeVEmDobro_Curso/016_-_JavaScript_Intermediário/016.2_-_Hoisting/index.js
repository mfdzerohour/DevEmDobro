// var pais //declaração
// pais = 'Brasil' //Atribuição

// var pais = 'Brasil' //Apesar de parecer que é feito de uma unica vez
                    //o JS vai executar 2 vezes, uma na declaração 
                    //e outra na atribuição

//Não importa onde é feita esta declaração, ele é sempre movido para o
//topo do "bloco" isto é chamado de hoisting (IÇAMENTO) e ele move a 
//declaração para o topo do bloco e não a atribuição que fica no lugar 
//onde ela foi atribuida

// *********************************************************** //
// console.log(pais)
// var pais = 'Brasil'

//Ele faz duas coisas
// ELE FAZ ISTO
//
// var pais
// pais = 'Brasil'

//como ele "coloca" acim var pais e nao tem a declação pais = 'Brasil'
//da como undefined usando o var

// *********************************************************** //

//USANDO O LET
console.log(pais)
let pais = 'Brasil'

// vai dar erro 
// 
// pais não pode ser carregados ou lidas antes de serem inicializadas e 
// são inicializadas onde são declaradas

//portanto devem ser decladas antes de serem usadas