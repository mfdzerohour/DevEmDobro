//Primeiro passo olhe a APO a documentação dela
//https://deckofcardsapi.com/
document.getElementById('tirarCarta').addEventListener('click', ()=>{
    tirarUmaCartaAleatoriaDoBaralho()
})

//Ele via ficar pendente por não ter o awai e o async function
async function criarBaralhoEmbralhado() {
    const urlAPI = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    //FETCH = Responsavel por buscar os dados da API, ele retorna 
    // uma PROMISE quando termina a busca
    const reposta = await fetch (urlAPI)
    //Posso ao inves de criar um JSON retornar
    //const json = await reposta.json()
    return await reposta.json()
}

async function tirarUmaCarta(deck_id) {
    const urlAPI = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const reposta = await fetch(urlAPI)
    return await reposta.json()
}

async function tirarUmaCartaAleatoriaDoBaralho(){
    const baralho = await criarBaralhoEmbralhado()
    const carta = await tirarUmaCarta(baralho.deck_id)
    const imagemCarta = carta.cards[0].image
    document.getElementById('carta').src = imagemCarta
    console.log(carta)
}

tirarUmaCartaAleatoriaDoBaralho()