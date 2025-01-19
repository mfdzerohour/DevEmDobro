// let valorBoleto = 100;

// // ************************************************************** //

// //Exemplo valorBoleto
// console.log(valorBoleto);

// // ************************************************************** //

let inputTelefone = document.getElementById('telefone');
console.log(inputTelefone);

inputTelefone.disabled = true;

function habilitarTelefone() {
    if (inputTelefone.disabled === true) {
        inputTelefone.disabled = false;
    } else {
        inputTelefone.disabled = true;
    }
}