//O correto aqui é o CONST
const vaiSeHospedarSimNao = confirm('Seja bem vindo(a), aventureiro(a)! Gostaria de pagar R$ 50,00 para passar a noite na nossa hospedagem?')

if (vaiSeHospedarSimNao) {
    alert('Ótimo! Nós temos as melhores camas de toda a região!')
//Pode deixar o ELSE mais generico caso ocorra algo generico ele sera executado
} else {
    alert('Que pena! Você parecia ser uma pessoa mais legal')
}