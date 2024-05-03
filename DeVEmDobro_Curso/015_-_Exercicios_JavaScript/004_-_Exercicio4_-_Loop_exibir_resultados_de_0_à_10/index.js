qtde=10;
const contador = document.querySelector('body')

for (let i = 0; i <= qtde; i++) {
    // console.log('O número atual é o ' + i + '<br>')
    contador.innerHTML += 'O número atual é o ' + i + '<br>'
}