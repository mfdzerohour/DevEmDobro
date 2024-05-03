qtde=10

const contador = document.querySelector('body')

for (let i = 0; i <= qtde; i++) {
    // console.log('O dobro do número ' + i +' é ' + i*2 + ' <br>')
    const dobro = i * 2
    contador.innerHTML += 'O dobro do número ' + i +' é ' + dobro + ' <br>'
}