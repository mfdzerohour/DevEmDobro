// setTimeout(() => {
//     alert("Olá mundo");
// }, 3000);



// setInterval(() => {
//     console.log("Executando a cada 2 segundos");
// }, 2000);



//É um metodo assincrono que destinam-se a ser operações não causadoras de bloqueios.
//Ele vai executar o console depois do timeout e em seguida console dentro do setTimeout
// setTimeout(() => {
//     console.log('console dentro o setTimeOut');
// }, 4000);

// console.log('console depois do setTimeout');


let idDoIntervalo = setInterval(() => {
                        console.log("Executando a cada 2 segundos");
                    }, 2000);

console.log(idDoIntervalo);

//Para a exceução quando roda o Interval
clearInterval(idDoIntervalo);
//Para a exceução quando roda o TimeOut
clearTimeout(idDoIntervalo);