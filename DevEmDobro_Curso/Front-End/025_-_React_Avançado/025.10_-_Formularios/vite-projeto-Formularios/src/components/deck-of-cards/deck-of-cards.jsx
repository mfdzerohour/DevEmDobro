import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Form from "../../components/forms/form.jsx";

async function createDeck() {
    const response = await fetch(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    const deck = await response.json();
    return deck.deck_id;
}

async function getCards(deckId) {
    const response = await fetch(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
    );
    return response.json();
}

const CardsList = (props) => {
    return (
        <ul>
            {
                props.cards.map((cards, index) => {
                    return (
                        <li key={index}>
                            <img src={cards.image} alt={cards.value} />
                        </li>
                    );
                })
            }
        </ul>
    )
}

CardsList.propTypes = {
    cards: PropTypes.array.isRequired
};

const DeckOfCards = () => {
    const [deck, setDeck] = useState({
        cards: []
    });

    useEffect(() => {
        const fetchData = async () => {
            const deckId = await createDeck();
            const dataCards = await getCards(deckId);

            setDeck({
                cards: dataCards.cards})
        }
        fetchData();
    }, []) //Hook de efeito precisa [] no final pode ser vazio ou colocar uma ou mais variaveis caso mude ele vai atualizar ela

    const addCard = (newCard) => {
        console.log(newCard);
        setDeck({
            cards: [...deck.cards, newCard]
        })
    }

    return (
        <section>
            <Form addCard = {addCard} />
            {deck.cards.length > 0 ? <CardsList cards={deck.cards} /> : "Nenhuma carta encontrada"}
        </section>
    );
};

export default DeckOfCards;
