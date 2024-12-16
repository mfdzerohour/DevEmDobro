//Preciso de variavel que guarde todas as imagens (slider's)
const imagens = document.querySelectorAll(".slide");

const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");

//Preciso do contador para saber quantas imagens tenho e quando a seta
//vai ficar opaca ou desabilitada
let imagemAtual = 0;


//Este trecho esta com erro, ver depois...
setaAvancar.addEventListener("click", function() => {
    if(imagemAtual === imagens.length -1){
        return;
    }

    imagemAtual++;

    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();
});

//Continuar no minuto 29:00