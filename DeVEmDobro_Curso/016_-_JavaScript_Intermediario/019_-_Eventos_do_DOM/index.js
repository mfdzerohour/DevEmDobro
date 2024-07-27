// let selectDeEstado = document.querySelector("select[name='estado']");

// selectDeEstado.addEventListener('change',function(){
//     alert("mudou o select");
// })

// console.log(selectDeEstado)

// da para fazer de forma encadeada, onde não precisa setar uma variavel para armazenar a informação.
//Observa que não precisa mais da variavel *selectDeEstado* e no final da querySelector não tem o ;
// o .addEventListener poderia ficar no final .querySelector("select[name='estado']"), .querySelector("select[name='estado']").addEventListener sem prejuizo de funcionamento, mas optpou por fazer da forma abaixo para ficar melhor de entender.

// document
//         .querySelector("select[name='estado']")
//         .addEventListener('change',function(){
//             alert("mudou o select");
//         })

// console.log(selectDeEstado)


document
        .querySelector("select[name='estado']")
        .addEventListener('change',function(event){
            console.log(event.target.value);
        })