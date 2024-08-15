const campos = document.querySelectorAll('.campoFormulario');
const enviar = document.getElementById('btn');

enviar.addEventListener('click', function(){
    verificarPreenchimento();
});

function verificarPreenchimento(){
    campos.forEach(function(item){   
        if (item.value.trim() !== '') {
            item.classList.add("preenchido");
            item.classList.remove("naoPreenchido");
        } else {
            item.classList.add("naoPreenchido");
            item.classList.remove("Preenchido");
        }
    });
}