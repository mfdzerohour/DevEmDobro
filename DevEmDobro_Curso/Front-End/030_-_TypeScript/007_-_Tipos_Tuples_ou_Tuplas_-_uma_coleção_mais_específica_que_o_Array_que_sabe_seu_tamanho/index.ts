// TypeScript code demonstrating the use of tuples
//Deve seguir a ordem dos tipos
// não pode declarar um tipo diferente
//Tem que declar a quantidade informada de tipos e seguir a ordem declarada
const stringNumber: [string, number] = ["Marcelo", 1982];

//Por exemplo poderia criar uma tupla para cores
let color: [number, number, number] = [255, 0, 0]; // RGB

//E pode ter valores opcionais na tupla com o ?
let bgColor: [number, number, number, number?]; //Pode quebrar a linha
bgColor = [0, 255, 255]; // RGBA a ultima cor é opcional não precisa passar

