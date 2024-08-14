const btnEnviar = document.getElementById('btn');
const preenchido = document.getElementsByClassName("formularioPreenchimento");

// Iterar sobre cada elemento preenchido
Array.from(preenchidos).forEach(preenchido => {
    btnEnviar.addEventListener("click", function() {
        if (preenchido.value.trim() !== '') {
            preenchido.classList.add('preenchido');
        } else {
            preenchido.classList.remove('preenchido');
        }
    });
});