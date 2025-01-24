const kindOf = require('kind-of');
const testeDeBooleano =  true;
const testeDeTexto = 'Teste de texto';
const testeDeNumero = 10;
console.log(kindOf(testeDeBooleano));
console.log(kindOf(testeDeTexto));
console.log(kindOf(testeDeNumero));