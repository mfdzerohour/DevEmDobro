//TypeScript - Propriedades e parâmetros opcionais
//No TypeScript, podemos definir propriedades e parâmetros com valores opcionais, por exemplo:
type Customer = {
    firstName: string;
    lastName?: string; //Se colocar ? antes dois PONTOS ele é opcional
    age: number;
}

const newCostumer: Customer = {
    firstName: 'Lucas',
    // lastName: 'Lima',
    age: 23
}

console.log(newCostumer);


//funções podem ter valores opcionais também, por exemplo:
function printName(firstName: string, lastName?: string) {
    console.log(`O primeiro nome é: ${firstName} e o ultimo nome é ${lastName ? lastName : ''}`);
}

printName('Lucas');