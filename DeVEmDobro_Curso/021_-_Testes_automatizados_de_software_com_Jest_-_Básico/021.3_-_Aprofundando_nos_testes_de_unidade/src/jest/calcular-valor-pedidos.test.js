// const calcularValorPedido = require('./calcular-valor-pedidos.test.js');
const calcularValorPedido = require('../js/calcular-valor-pedidos.js');

it('não deve cobrar valor de frete quando o valor dos produtos for superior a 500', () => {
    //AAA - Arange (Organizar/Arrumar), Act (Agir), Assert (Afirmar) = 3 passos de criação de um teste

    //Arrange - Organizar/Arrumar - O objeto do teste
    const meuPedido = {
        itens: [
                    { nome: 'Arco encantado', valor: 2000 },
                    { nome: 'Entrega', valor: 100, entrega: true }
                ]
    }
    
    //Act - Agir - O que o vai ser o teste
    const resultado = calcularValorPedido(meuPedido);
    
    //Assert - Afirmar - O que o teste vai dizer / Resultado do teste
    expect(resultado).toBe(2000);
});

it('deve cobrar valor de frete quando o valor dos produtos for inferior a 500', () => {
    //AAA - Arange (Organizar/Arrumar), Act (Agir), Assert (Afirmar) = 3 passos de criação de um teste

    //Arrange - Organizar/Arrumar - O objeto do teste
    const meuPedido = {
        itens: [
                    { nome: 'Sanduciheira', valor: 350 },
                    { nome: 'Entrega', valor: 50, entrega: true }
                ]
    }
    
    //Act - Agir - O que o vai ser o teste
    const resultado = calcularValorPedido(meuPedido);
    
    //Assert - Afirmar - O que o teste vai dizer / Resultado do teste
    expect(resultado).toBe(400);
});

it('deve cobrar valor de frete quando o valor dos produtos for EXATAMENTE 500', () => {
    //AAA - Arange (Organizar/Arrumar), Act (Agir), Assert (Afirmar) = 3 passos de criação de um teste

    //Arrange - Organizar/Arrumar - O objeto do teste
    const meuPedido = {
        itens: [
                    { nome: 'Cama de casal', valor: 500 },
                    { nome: 'Entrega', valor: 50, entrega: true }
                ]
    }
    
    //Act - Agir - O que o vai ser o teste
    const resultado = calcularValorPedido(meuPedido);
    
    //Assert - Afirmar - O que o teste vai dizer / Resultado do teste
    expect(resultado).toBe(550);
});