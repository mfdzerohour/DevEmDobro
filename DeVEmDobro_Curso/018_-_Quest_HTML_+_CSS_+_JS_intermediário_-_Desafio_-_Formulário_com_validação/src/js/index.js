const campos = document.querySelectorAll('.campo-Formulario');
const enviar = document.getElementById('btn');
const formularioSection = document.querySelector('.formulario');
// let totalHeight = 0;

enviar.addEventListener('click', function() {
    verificarPreenchimento();
    ajustarTamanhoForm();
});

function verificarPreenchimento(){
    campos.forEach(function(item){   
        if (item.value.trim() !== '') {
            item.classList.add("preenchido");
            item.classList.remove("naoPreenchido");
            item.nextElementSibling.classList.remove("mostrar")
        } else {
            item.classList.add("naoPreenchido");
            item.classList.remove("Preenchido");
            item.nextElementSibling.classList.add("mostrar")
        }
    });
}

function ajustarTamanhoForm() {
    // Reseta a altura total a cada chamada da função
    let totalHeight = 0;
    const visibleCampos = document.querySelectorAll('.campo-obrigatorio.mostrar');

    visibleCampos.forEach(function(campoVisivel) {
        totalHeight += campoVisivel.offsetHeight;
    });

    const novaAltura = formularioSection.offsetHeight + totalHeight;

    if (novaAltura > formularioSection.offsetHeight) {
        formularioSection.style.height = novaAltura + 'px';
    }
}