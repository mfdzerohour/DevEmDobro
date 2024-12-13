function alterarCorDeFundoPrimeiroPost() {
    let posts = document.getElementsByClassName('post');
    // console.log(posts);

    //Arqui armazernar o valor posts[0] na varaivel primeiroPost
    let primeiroPost = posts[0];
    console.log('primeiroPost',primeiroPost);
    primeiroPost.style.backgroundColor = 'lightgreen';
}

function alterarCorDeFundoSegundoPost() {
    let posts = document.getElementsByClassName('post');
    //Arqui armazernar o valor posts[0] na varaivel segundoPost
    let segundoPost = posts[1];
    segundoPost.style.backgroundColor = 'lightblue';
}

// Minuto 05:24