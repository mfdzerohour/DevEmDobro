const btnEnviar = document.getElementById('btn');
const preenchido = document.getElementsByClassName("formularioPreenchimento");

function verificarCampoPreenchido(){
    if (preenchido.value.trim() !== '') {
        preenchido.classList.add('preenchido');
    } else {
        preenchido.classList.remove('preenchido');
    }
}



// // Iterar sobre cada elemento preenchido
// Array.from(preenchidos).forEach(preenchido => {
//     btnEnviar.addEventListener("click", function() {
//         alert("Funcionou!");
//         // if (preenchido.value.trim() !== '') {
//         //     preenchido.classList.add('preenchido');
//         // } else {
//         //     preenchido.classList.remove('preenchido');
//         // }
//     });
// });