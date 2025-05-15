/*
TypeScript - Desabilitar tipagem com tipo Any

O TypeScript também tem um tipo especial, que podemos usar quando não queremos que um valor específico cause erros de verificação de tipo, ou quando não temos certeza do tipo, é o tipo any, que traduzido pra português significa qualquer.
Então, se falamos que o elemento seria de qualquer tipo, mas é importante tentar evitar ao máximo o uso do any e vou te mostrar por que.
Mas quando usar o any então?
  *  Quando estamos trabalhando com código legado que não pode ser facilmente refatorado para usar tipos específicos.
  *  Quando estamos trabalhando com bibliotecas externas cujos tipos não são definidos ou não estão disponíveis.
Em resumo, o tipo any é uma ferramenta poderosa, mas deve ser usado com cautela. 
Sempre que possível, especifique o tipo das variáveis para ter a segurança de tipos que o TypeScript oferece e para tornar o seu código mais fácil de manter e entender.
*/

// let moviesCount: any = 10;
// moviesCount = '10';

function sum(number1: number, number2: number) {
    return number1 + number2;
}

//console.log(sum(10, 20));
