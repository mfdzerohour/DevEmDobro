//Quando for generico informar o tipo "T"
// function makeArray<T>(item: T): T[]{
//     return [item];
// }

// const numbers = makeArray(10);
// console.log(numbers); // [10]

// const names = makeArray("John");
// console.log(names); // ["John"]

//Seu código já é um exemplo básico de generics,
// mas podemos deixá-lo mais completo e organizado,
// mostrando como usar generics com múltiplos tipos
// e tornando-o ainda mais reutilizável. Veja um
// exemplo expandido:

//Quando for generico informar o tipo "T"
function makeArray<T>(item: T): T[] {
    return [item];
}

const numbers = makeArray(10);
console.log(numbers); // [10]

const names = makeArray("John");
console.log(names); // ["John"]

// Função genérica com dois tipos (renomeada para evitar conflito)
function makeTuple<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

const tuple1 = makeTuple(1, "um");
console.log(tuple1); // [1, "um"]

const tuple2 = makeTuple(true, { nome: "Maria" });
console.log(tuple2); // [true, { nome: "Maria" }]