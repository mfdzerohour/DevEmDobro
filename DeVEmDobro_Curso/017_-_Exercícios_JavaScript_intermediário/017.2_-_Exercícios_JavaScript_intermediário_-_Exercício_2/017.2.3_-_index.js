/*
		Dica: Começar pensando no objetivo do que precisa fazer e no passo a passo pra chegar lá é essencial.
    
    NÂO SAIA TENTANDO ESCREVER CÓDIGO! Antes disso você precisa saber O QUE precisa ser feito e só depois COMO fazer.

		Objetivo do exercício: Multiplicar itens de uma array por 10.

		Passo 1 - Criar a array de itens.
		
		Passo 2 - Utilizar essa array declarada para utilizar o laço forEach.

		Passo 3 - No forEach, utilizamos uma variável para iterar cada elemento da array.

		Passo 4 - Imprimir os elementos já multiplicados por 10, utilizando o console.log().
*/

// Passo 1 - Criar a array de elementos.
const numeros = [65, 44, 12, 4];

//Passo 2 - Utilizar essa array declarada para utilizar o laço ForEach.
numeros.forEach((item) => {
		// Passo 3 - No  ForEach, utlizamos uma variável para iterar cada elemento da array.
		console.log(item * 10);
		// Passo 4 - Imprimir os elementos já multiplicados por 10, utilizando o console.log.
});