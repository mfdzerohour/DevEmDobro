// while (condition) {
//     <bloco de execução>
// }
//
// o While => Testa e depois executa

let a = 10;
let b = 15

while (a < b) {
    console.log("incrementando o valor de a",  a);
    a++;
}

// do {
//     bloco de execução
// } while (condition);
//
//o Do While => Executa e depois testa

var i = 1;

do {
    console.log("entrou", i);
    i++;
} while (i <= 5);