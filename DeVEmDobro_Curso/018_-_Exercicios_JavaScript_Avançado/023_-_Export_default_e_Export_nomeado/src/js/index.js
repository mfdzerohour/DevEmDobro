//Quando se usa a exportação default não consegue usar as chaves {}
//import { somar } from "./operacoes-matematicas.js";
// import somar from "./operacoes-matematicas.js";

// console.log(somar(1, 3));


//Quando é uma exportação nomeada usamos as chaves{}
import { somar } from "./operacoes-matematicas.js";

console.log(somar(1, 3));