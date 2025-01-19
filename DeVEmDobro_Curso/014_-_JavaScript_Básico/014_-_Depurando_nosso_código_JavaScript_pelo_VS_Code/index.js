function calcularFatorial(numero){
    let resultado = 1;

    for (let i = 1; i <= numero; i++){
        resultado *= i;
        //resultado = resultao * i;
    }

    return resultado;
}

function imprimirFatorial(numero){
    const ehUmNumeroNegativo = numero < 0;
    if (ehUmNumeroNegativo){
        console.log("Não é possivel calcular o fatorial de um número negativo");
    } else {
        const factorial = calcularFatorial(numero);
        console.log(`O fatorial de ${numero} é ${factorial}`);
    }
}

const numero = 5;
imprimirFatorial(numero);