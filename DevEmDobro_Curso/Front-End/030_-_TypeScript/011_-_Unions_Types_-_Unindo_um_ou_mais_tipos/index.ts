// TypeScript - Unions: unindo um ou mais tipos
// Nessa aula vamos te apresentar o conceito do Union types, com isso a temos a possibilidade de unir dois ou mais tipos.

//Quando usa a | ele esta unindo um ou outro (id: number | string)

function printClienteID(id: number | string) {
    console.log(`O ID do cliente é: ${id}`);
}

printClienteID(1);
printClienteID('1');
printClienteID('sadasdsds');

