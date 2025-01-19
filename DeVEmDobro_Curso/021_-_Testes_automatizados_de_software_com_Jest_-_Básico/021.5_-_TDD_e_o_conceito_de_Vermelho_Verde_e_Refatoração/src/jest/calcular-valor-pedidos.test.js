// const calcularValorPedido = require('./calcular-valor-pedidos.test.js');
const calcularValorPedido = require('../js/calcular-valor-pedidos.js');
const acrescimoValorEntregaPorcentagem = 20;

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

/** Caso os estados de entrega sejam RS ou SC, deve ser acrescido um valor de 2% na entrega **/
it('deve adicionar um acrescimo no valor de 20% no valor da entrega caso o estado for RS',() => {
    const pedidoComEstadoRS = {
        estado: 'RS',
        itens: [
            { nome: "Cama de casal", valor: 500 },
            { nome: "Entrega", valor: 100, entrega: true }
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoRS);
    expect(resultado).toBe(620);    
});

it('deve adicionar um acrescimo no valor de 20% no valor da entrega caso o estado for SC',() => {
    const pedidoComEstadoSC = {
        estado: 'SC',
        itens: [
            { nome: "Cama de casal", valor: 500 },
            { nome: "Entrega", valor: 100, entrega: true }
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoSC);
    expect(resultado).toBe(valor[0].valor + valor[1].valor + ((valor[1].valor * acrescimoValorEntregaPorcentagem) / 100));    
});

it('não deve adicionar um acrescimo no valor de 20% no valor da entrega se o estado for diferente RS ou SC',() => {
    const pedidoComEstadoSP = {
        estado: 'SP',
        itens: [
            { nome: "Cama de casal", valor: 500 },
            { nome: "Entrega", valor: 100, entrega: true }
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoSP);
    
    expect(resultado).toBe(500+100);    
});