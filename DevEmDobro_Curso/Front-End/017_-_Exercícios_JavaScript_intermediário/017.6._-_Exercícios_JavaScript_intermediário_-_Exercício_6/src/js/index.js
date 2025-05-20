const itensPerguntasERepostas = document.querySelectorAll('.item')
// console.log(itensPerguntasERepostas)

itensPerguntasERepostas.forEach(function (item) {
    // console.log(item)
    item.addEventListener("click", function () {
        //Preciso pegar o item ativo antes de clicar para desativar ele
        //Este estou pegando só o ativo
        const itemAtivoAtual = document.querySelector('.ativo');

        //É necessario este tratamento caso esteja sem item ativo inicial 
        // (default) ele vai apresentar problemas
        if(itemAtivoAtual) { /* Aqui vai dar false  e vai pular o restante */
            itemAtivoAtual.classList.remove('ativo');
        }

        //Tem que adicionar a classe depois de remover
        item.classList.add('ativo');
    })
})