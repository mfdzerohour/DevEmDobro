//Preciso de variavel que guarde todas as imagens (slider's)
const imagens = document.querySelectorAll(".slide");

const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");

//Preciso do contador para saber quantas imagens tenho e quando a seta
//vai ficar opaca ou desabilitada
let imagemAtual = 0;


//Este trecho esta com erro, ver depois...
setaAvancar.addEventListener('click', () =>{
    // console.log(imagemAtual);
    // console.log(imagens.length);
    if (imagemAtual === imagens.length - 1) {
        return;
    }

    //Preciso pegar a imagem atual e incrementar +1
    imagemAtual++

    //Esconder imagem ao clicar em próxima
    esconderImagemAberta();
    
    //Conforme for incrementando ele vai adicionando a classe mostrar
    mostrarImagem();

    //Esconder ou mostrar as setas
    mostrarOuEsconderSetas()
})

function esconderImagemAberta() {
    const imagemAberta = document.querySelector(".mostrar");
    imagemAberta.classList.remove("mostrar");
}

function mostrarImagem() {
    imagens[imagemAtual].classList.add('mostrar'); 
}

function mostrarOuEsconderSetas(){
    const naoEhAPrimeiraImagem = imagemAtual !== 0;
    if(naoEhAPrimeiraImagem){
        setaVoltar.classList.add('opacidade');
    }else{
        setaVoltar.classList.remove('opacidade');
    }

    const chegouNaUltimaImagem = imagemAtual != 0 && imagemAtual === imagens.length - 1;
    if(chegouNaUltimaImagem){
        setaAvancar.classList.add('opacidade');
    }else{
        setaAvancar.classList.remove('opacidade');
    }
} 