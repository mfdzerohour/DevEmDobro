function alterarCorDeFundoPrimeiroPost() {
    let posts = document.getElementsByClassName('post');
    // console.log(posts);

    //Arqui armazernar o valor posts[0] na varaivel primeiroPost
    let primeiroPost = posts[0];
    console.log('primeiroPost',primeiroPost);
    primeiroPost.style.backgroundColor = 'lightgreen';
}

function aumentarAFonteDoSegundoPost() {
    let textoPosts = document.getElementsByClassName('texto-post');
    //console.log(textoPosts)
    
    // console.log(textoPosts[1].classList);
    textoPosts[1].classList.add("fonte-grande");   
}

// function marcarRadio(genero){
//     //verificar se esta puxando o M e o F do botão
//     //console.log(genero); //Sim esta chegando

//     let radioMasculino = document.getElementsById('genero-masculino');
//     let radioFeminino = document.getElementsById('genero-feminino');
//     console.log(radioMasculino)
//     console.log(radioFeminino)
//     // if(genero === 'M'){
//     //     radioMasculino.checked = true;
//     // }else if(genero === 'F'){
//     //     radioFeminino.checked = true;
//     // }
// }

function marcarRadio(genero){
    //verificar se esta puxando o M e o F do botão
    //console.log(genero); //Sim esta chegando

    let radioMasculino = document.getElementById('genero-masculino');
    let radioFeminino = document.getElementById('genero-feminino');

    if(genero === 'M'){
        radioMasculino.checked = true;
    }else if(genero === 'F'){
        radioFeminino.checked = true;
    }
}