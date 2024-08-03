//Primeiro vejo todas as varaiveis que precisarei armazenar
//Esta armazena todos os elementos em HTML que tenham .slide
const imagens = document.querySelectorAll(".slide");

//Estes dois vou ver os elementos com os ID's abaixo
const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");

//Preciso armazenar o numero da imagem atual
let imagemAtual = 0;

setaAvancar.addEventListener("click", function() {
    //Verifica se a imagem atual é idenfica ao imagens.length,
    //se for ele não executa mais nada
    if (imagemAtual === imagens.length -1) {
        return;
    }

    imagemAtual++;

    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();
});

setaVoltar.addEventListener("click", function() {
    if (imagemAtual === 0) {
        return;
    }

    imagemAtual--;

    esconderImagemAberta();    
    mostrarImagem();
    mostrarOuEsconderSetas();

});

function mostrarImagem() {
    imagens[imagemAtual].classList.add("mostrar");
}

function esconderImagemAberta(){
    const imagemAberta = document.querySelector(".mostrar");
    imagemAberta.classList.remove("mostrar");
}

function mostrarOuEsconderSetas(){
    const naoEhAPrimeiraImagem = imagemAtual !== 0;

    //Verifica a opacidade da seta esquerda
    if (naoEhAPrimeiraImagem) {
        setaVoltar.classList.remove("opacidade");
    } else {
        setaVoltar.classList.add("opacidade");
    }

    //Verifica se a imagem é diferente de zero e a imagem atual -1 = imagem atual
    const chegouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length -1;

    //Se for ele adiciona a opacidade na SETA da direita
    if (chegouNaUltimaImagem) {
        setaAvancar.classList.add("opacidade");
    } else {
        setaAvancar.classList.remove("opacidade");
    }


}