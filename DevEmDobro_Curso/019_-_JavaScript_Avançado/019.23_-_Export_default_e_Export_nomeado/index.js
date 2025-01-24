// Quando se usa o export default não consegue usar as chaves {}
//import {somar} from "./operacoesMatematicas.js";

//O nome do modulo default pode ser mudado por exemplo XPTO ao inves
//de soma funciona porque só tem 1 default

// import xpto from "./operacoesMatematicas.js";

// console.log('Resultado da soma: 1 + 3 = ' + xpto(1,3));

/* *********************************************** */

//Importação NOMEADA é a que usamos antes
import {dividir, multiplicar, somar, subtrair} from "./operacoesMatematicas.js";

console.log('Resultado da soma: 1 + 3 = ' + somar(1,3));
console.log('Resultado da subtracao: 3 - 1 = ' + subtrair(3,1));
console.log('Resultado da multiplicação: 4 * 3 = ' + multiplicar(4,3));
console.log('Resultado da Divisão: 6 / 2 = ' + dividir(6,2));