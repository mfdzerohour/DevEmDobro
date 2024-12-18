let usuario = {
    nome: 'Roberto',
    //Metododo
    excluir: function() {
        console.log('Usuário, ' +  this.nome + ' foi excluido!')
    }
}

usuario.excluir()