import React from "react";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
    const { name } = useParams(); // Obtém o parâmetro "name" da URL

    return (
        <div>
            <h1>Detalhes do Pokémon</h1>
            <p>Nome: {name}</p>
        </div>
    );
};

export default PokemonDetails;