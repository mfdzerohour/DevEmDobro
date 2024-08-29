// //Código Sincrono
// function colocarAguaPraFerver(){
//     console.log('colocar água para ferver');
// }

// function prepararPraPassarOCafe(){
//     console.log('pegar o pó de café');
//     console.log('pegar o filtro de café');
//     console.log('colocar o café no filtro');
//     console.log('colocar o filtro em cima da xicara');
// }

// function passarOCafe(){
//     console.log('passando o café');
// }

// colocarAguaPraFerver();
// prepararPraPassarOCafe();
// passarOCafe();

//Código Assincrono
function colocarAguaPraFerver(){
    console.log('colocar água para ferver');

    setTimeout(() => { //vai esperar 5 segundos e exibe a mensagem
        console.log('água ferveu'); //exibe mensagem
        passarOCafe(); //Faz esta rotina após o tempo de 5s
    }, 5000); //Aqui o tempo de espera
}

function prepararPraPassarOCafe(){
    console.log('pegar o pó de café');
    console.log('pegar o filtro de café');
    console.log('colocar o café no filtro');
    console.log('colocar o filtro em cima da xicara');
}

function passarOCafe(){
    console.log('passando o café');
}

colocarAguaPraFerver();
prepararPraPassarOCafe();