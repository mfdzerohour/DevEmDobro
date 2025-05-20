//Forma normal de fazer sempre colocando o + para concatenar
// const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) =>{
//     return "Primeiro nome: " + primeiroNome + ", Último nome: " + ultimoNome + ", Idade: " + idade;
// }
// console.log(imprimirInformacoesPessoa("Roberto", "Silva", 33));

//Strings com ASPOSTROFOS `` para concatenar
const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => {
    return `Primeiro nome: ${primeiroNome}, Último nome: ${ultimoNome}, Idade: ${idade}`;
}
//Tem duas formas de imprimir a primeir não muda nada
console.log(imprimirInformacoesPessoa("Roberto", "Silva", 33));

//A segunda chamo uma função, podendo ascrentar texto por exemplo
console.log(`${imprimirInformacoesPessoa("Roberto", "Silva", 33)}, ele é um DevQuester!`);

//Pode fazer soma também por exemplo mas neste caso não armazena o resultado em banco de dados apenas faz e mostra o resultado
console.log(`Soma ${10 + 20}`)