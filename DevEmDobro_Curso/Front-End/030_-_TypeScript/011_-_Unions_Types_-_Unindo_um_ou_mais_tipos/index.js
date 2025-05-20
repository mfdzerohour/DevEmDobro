// TypeScript - Unions: unindo um ou mais tipos
// Nessa aula vamos te apresentar o conceito do Union types, com isso a temos a possibilidade de unir dois ou mais tipos.
//Quando usa a | ele esta unindo um ou outro (id: number | string)
function printClienteID(id) {
    console.log("O ID do cliente \u00E9: ".concat(id));
}
printClienteID(1);
printClienteID('1');
printClienteID('sadasdsds');
