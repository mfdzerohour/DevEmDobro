/*
    Operadores lógicos parte 1
    ==  ---- igual ---- A == B ---- verdadeiro se A for igual a B não testa o TIPO
    === ---- idêntico ---- A === B ---- verdadeiro se A for idêntico a B testa o TIPO
    !== ---- não idêntico ---- A !== B ---- verdadeiro se A for não idêntico a B testa o TIPO
    != ---- diferente ---- A != B ---- verdadeiro se A for diferente a B não testa o TIPO
    < ---- menor que ---- A < B ---- verdadeiro se A for menor que B
    <= ---- menor ou igual que ---- A <= B ---- verdadeiro se A for menor ou igual que B
    > ---- maior que ---- A > B ---- verdadeiro se A for maior que B
    >= ---- maior ou igual que ---- A >= B ---- verdadeiro se A for maior ou igual que B
*/

//Operadores lógicos parte 2
const a = 2;
const b = 2;

// // Tabela verdade do E
// // V e V = V
// console.log( a === b && a <= b);

// // V e F = F
// console.log( a === b && a < b);

// // F e V = F
// console.log( a > b && a === b);

// // F e F = F
// console.log( a > b && a < b);





// Tabela verdade do OR (OU)
// // V ou V = V
// console.log( a === b || a <= b);

// // V ou F = V
// console.log( a === b || a < b);

// // F ou V = V
// console.log( a > b || a === b);

// // F ou F = F
// console.log( a > b || a < b);




//NOT (não) ele inverte o valor de uma expressão

console.log(!(a === b)); //false

console.log(!(a < b)); //true
