// //FOMA MAIS LOGA --> INICIO
// //Puxando o valor do SelectEstado do HTML que a pessoa selecionou
// let selectDeEstado = document.querySelector('select[name="Estado"]');
// //Verificando os valores que existem no select
// console.log(selectDeEstado);

// //Puxando o valor do SelectCidade do HTML que a pessoa selecionou
//Quando coloco a palavra event dentro da função estou dizendo que 
//quero pegar o evento que foi disparado
// selectDeEstado.addEventListener('change', function(event){
    //alert('Mudou o select')
// })

// //FOMA MAIS LOGA --> FIM

// ***************************************************************** //

//O mesmo código acima pode ser feito de forma encadeada, ficando
// mais curto e possivelmente mais enxuto

//não precisaria declarar a variavel
//Vou quebrar o código para ficar mais claro, não atrapalha em nada

//Quando coloco a palavra event dentro da função estou dizendo que 
//quero pegar o evento que foi disparado
document
    .querySelector('select[name="Estado"]')
    .addEventListener("change", function (event) {
        // alert("Mudou o select");
        //Quando seleciona ele aparece em target (alvo)
        //Desta forma ele vai aparecer as siglas dos Estados SC, MS, SP...
        console.log(event.target.value);
    });
