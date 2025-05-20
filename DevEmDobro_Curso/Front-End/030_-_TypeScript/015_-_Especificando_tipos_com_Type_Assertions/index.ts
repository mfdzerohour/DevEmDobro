//TypeScript - Especificando tipos com Type Assertions
//Nessa aula,  vamos ver o conceito de type assertions, que seria basicamente a gente dizer pro TypeScript qual o tipo que é esperado pra um valor.
//Algumas vezes o TypeScript não sabe qual tipo esperar, então podemos informar isso.

const button = document.getElementById('button') as HTMLButtonElement;

button.addEventListener('click', (event) => {
    const mouseEvent = event as MouseEvent;
});

// O Type Assertion em TypeScript serve para informar ao compilador qual é o 
// tipo de uma variável quando ele não consegue inferir corretamente. É como 
// dizer: “Eu sei melhor que você qual é o tipo aqui”.

// Função do Type Assertion
// Permite ao desenvolvedor especificar explicitamente o tipo de uma variável.
// Ajuda quando o TypeScript não consegue deduzir o tipo corretamente, como 
// ao manipular elementos do DOM ou dados vindos de APIs externas.
// 
// Por que usar?
// Para acessar propriedades ou métodos específicos de um tipo.
// Para evitar erros de compilação quando você tem certeza do tipo, mas o 
// TypeScript não consegue garantir isso.
// 
// Quando é recomendável?
// Ao manipular elementos do DOM (como no seu exemplo).
// Ao trabalhar com dados de APIs externas, onde o tipo pode não ser claro.
// Em situações de migração de JavaScript para TypeScript, para facilitar a 
// transição.
// 
// Quando NÃO é recomendável?
// Quando o TypeScript já consegue inferir o tipo corretamente.
// Para “forçar” um tipo sem ter certeza, pois isso pode mascarar erros e 
// causar bugs em tempo de execução.
// Para converter entre tipos totalmente incompatíveis (por exemplo, de string para number sem validação).
// 
// Resumo:
// Use Type Assertions quando você tem certeza do tipo e o TypeScript não 
// consegue inferir, mas evite usar para “enganar” o compilador ou quando não 
// tem certeza do tipo real.