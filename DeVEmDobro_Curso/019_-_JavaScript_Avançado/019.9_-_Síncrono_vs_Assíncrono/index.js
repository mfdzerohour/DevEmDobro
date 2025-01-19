//sincrono tudo é executado em sequencia
// function colocarAguaParaFerver(){
//     console.log('colocar água para ferver');
// }

// function prepararParaPassarOCafe(){
//     console.log('pegar o pó do café');
//     console.log('pegar o filtro de Café');
//     console.log('colocar o café no filtro');
//     console.log('colocar o filtro em cima da xicara');
// }

// function passarOCafe(){
//     console.log('passando o café');
// }

// colocarAguaParaFerver();
// prepararParaPassarOCafe();
// passarOCafe();

/* **************************************************************** */
//ASSICRONO - é executado em paralelo
function colocarAguaParaFerver(){
    console.log('colocar água para ferver');
    //Volta a executar esta parte depois de 5 segundos
    setTimeout(() => {
        console.log('Água ferveu');
        passarOCafe();        
    }, 5000);
}

function prepararParaPassarOCafe(){
    console.log('pegar o pó do café');
    console.log('pegar o filtro de Café');
    console.log('colocar o café no filtro');
    console.log('colocar o filtro em cima da xicara');
}

function passarOCafe(){
    console.log('passando o café');
}

colocarAguaParaFerver();
prepararParaPassarOCafe();