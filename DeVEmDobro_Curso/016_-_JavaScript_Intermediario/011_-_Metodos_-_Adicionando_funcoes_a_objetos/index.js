let usuario = {
    nome: 'Marcelo',
    excluir: function(){
        console.log('O usuário, '+this.nome+' foi excluido!')
    },
    incluir: function(){
        console.log("O usuário"+this.nome+' foi incluido!')
    },
    localizar: function(){
        console.log("O usuário"+this.nome+' foi localizado!')
    }
}

// usuario.excluir()
// usuario.incluir()
// usuario.localizar()