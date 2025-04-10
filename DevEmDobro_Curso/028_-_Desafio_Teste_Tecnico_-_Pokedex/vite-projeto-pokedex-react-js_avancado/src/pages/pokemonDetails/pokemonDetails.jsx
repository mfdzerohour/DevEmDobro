import React from "react";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
    const { name } = useParams(); // Obtém o parâmetro "name" da URL

    return (
        <div style={{ padding: "2em" }}>
            <h1>Detalhes do Pokémon</h1>
            <p>Nome: {name}</p>
            {/* Aqui você pode adicionar mais informações sobre o Pokémon */}
        </div>
    );
};

export default PokemonDetails;