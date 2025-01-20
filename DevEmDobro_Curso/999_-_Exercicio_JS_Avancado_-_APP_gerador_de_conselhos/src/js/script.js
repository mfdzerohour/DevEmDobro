const adviceID = document.getElementsByClassName("advice-id")[0];
const adviceDescription = document.getElementsByClassName("advice-description")[0];
const btn = document.getElementById('btn');

async function getAdvice() {
    await fetch('https://api.adviceslip.com/advice',{cache: "no-cache"})
        .then(response => response.json())
        .then(data => {
            const advice = data.slip.advice;
            adviceID.textContent = `Advice #${data.slip.id}`;
            adviceDescription.textContent = advice;
        })
        .catch(error => console.error(error));
        await mensagemBotaoPressionado();
}

async function mensagemBotaoPressionado(){
    alert("Pressionei o botão");
}

// A requisição deveria ser feita a cada clique
btn.addEventListener('click', getAdvice);

getAdvice()