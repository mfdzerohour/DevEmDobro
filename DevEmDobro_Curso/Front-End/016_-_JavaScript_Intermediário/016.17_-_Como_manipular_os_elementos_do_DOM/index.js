function adicionarComentario() {
    //Criou uma lista(array) pegando do document.getElementsByName('novo-comentario')
    let inputNovoComentario = document.getElementsByName('novo-comentario')
    //pegar o texto digitado, como é um array tenho que dizer em qual posição e o .VALUE
    let textoDigitado = inputNovoComentario[0].value

    //Pegar o texto inserido no document.getElementById('novos-comentarios')
    let novosComentarios = document.getElementById('novos-comentarios')

    //innerHTML - Serve para adicionar em um HTML "interno" o que for digitado
    //Esta é a forma longa do comando acima sem o +=
    //novosComentarios.innerHTML = novosComentarios.innerHTML + `<p>Novo comentário:${textoDigitado}</p>`
    //O sinal de += ele vai adicionando o texto sem sobrever
    novosComentarios.innerHTML += `<p>Novo comentário:${textoDigitado}</p>`
    

    console.log(textoDigitado)
}