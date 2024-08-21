//Forma Comum
// const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => {
//     return "Primeiro Nome " + primeiroNome + ", Último Nome: " + ultimoNome + ", Idade: " + idade;
// }

// console.log(imprimirInformacoesPessoa ("Roberto", "Dias", 33));

//Com Interpolação de Texto
const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => {
    return `Primeiro Nome: ${primeiroNome}, Último Nome: ${ultimoNome}, Idade: ${idade}`;
}

//Existem duas formas de imprimir o resultado conforme abaixo:
console.log(imprimirInformacoesPessoa ("Roberto", "Dias", 33));
console.log(`${imprimirInformacoesPessoa("Roberto", "Dias", 33)}, ele é um DevQuester`);

//Outro exemplo
console.log(`Soma: ${10 + 20}`);
