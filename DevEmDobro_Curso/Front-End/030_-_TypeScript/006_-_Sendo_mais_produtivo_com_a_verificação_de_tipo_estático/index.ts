let nome = 'Marcelo';

//Aqui o erro é porque o NOME é do tipo STRING e não do tipo NUMBER
//nome = 123;

function sum(number1: number, number2: number){
    return number1 + number2;
}

//sum(1); // Aqui o erro é porque a função espera dois parâmetros e só foi passado um
sum(1, 2); // Aqui não tem erro porque a função espera dois parâmetros e foram passados dois