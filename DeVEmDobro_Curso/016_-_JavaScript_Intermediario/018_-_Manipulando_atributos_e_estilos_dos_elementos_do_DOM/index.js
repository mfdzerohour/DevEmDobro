function alterarCorDeFundoPrimeiroPost(){
    let posts = document.getElementsByClassName("post");

    let primeiroPost = posts[0];

    primeiroPost.style.backgroundColor = 'red';
}

function aumentarFonteSegundoPost(){
    let textoPosts = document.getElementsByClassName("texto-post");

    console.log(textoPosts[1].classList);

    textoPosts[1].classList.add('font-grande');
}

function marcarRadio(genero){
    //console.log(genero);
    let radioFeminino = document.getElementById("genero-feminino");
    let radioMasculino = document.getElementById("genero-masculino");

    if(genero === 'F'){
        radioFeminino.checked = true
    } else if(genero === 'M'){
        radioMasculino.checked = true
    }
}