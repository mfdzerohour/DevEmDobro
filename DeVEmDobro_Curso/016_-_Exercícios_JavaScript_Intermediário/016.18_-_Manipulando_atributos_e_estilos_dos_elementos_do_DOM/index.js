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
    // textoPosts[1].classList.add("fonte-grande");
    console.log(textoPosts[1].classList);
}

// Minuto 06:00