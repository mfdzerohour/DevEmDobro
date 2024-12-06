// const calcularAnoDeNascimento = function(imprimir) {
//     const dataAtual = new Date();
//     const mesAtual = dataAtual.getMonth();
//     const anoAtual = dataAtual.getFullYear();

//     const idadeString = prompt('Informe a sua idade: ');
//     const idade = parseInt(idadeString);

//     const mesDeNascimentoString = prompt('Informe o mês de nascimento: ');
//     const mesDeNascimento = parseInt(mesDeNascimentoString);

//     // const anoDeNascimento = anoAtual - idade 
//     // if (mesDeNascimento > mesAtual) anoDeNascimento--;
    
//     //Esta parte de cima é mesma que a de baixo, só que aqui é mais direta
//     const anoDeNascimento = anoAtual - idade - (mesDeNascimento > mesAtual ? 1 : 0);
    

//     imprimir(anoDeNascimento);
// }

// const imprimirAnoDeNascimento = anoDeNascimento => {
//     alert(`Seu ano de nascimento é: ${anoDeNascimento}`);
// }

// calcularAnoDeNascimento(imprimirAnoDeNascimento);


// ************************************************************** //
function multiplicar(multiplicador) {
    return function(numero) {
        return numero * multiplicador;
    }
}

const dobrar = multiplicar(2)
const triplicar = multiplicar(3)
const quadruplicar = multiplicar(4)

//Numero que serão feitos os calculos de multiplicar ele
const numero = 3

console.log('O número ' + numero + ' dobrado é: ' + dobrar(numero))
console.log('O número ' + numero + ' triplicado é: ' + triplicar(numero))
console.log('O número ' + numero + ' quadruplicado é: ' + quadruplicar(numero))