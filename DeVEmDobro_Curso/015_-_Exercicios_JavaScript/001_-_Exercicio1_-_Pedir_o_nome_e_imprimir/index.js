const nomeDoUsuario = prompt('Informe o seu nome: ')

if (nomeDoUsuario !== '') {
    alert('Seja bem vindo(a), ' + nomeDoUsuario + '!')
} else {
    const nomeDoUsuario = prompt('É necessário informar o nome de um usuário: ')
    alert('Seja bem vindo(a), ' + nomeDoUsuario + '!')
}