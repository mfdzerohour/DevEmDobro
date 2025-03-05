import "./home.css";
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar.jsx";
import PokemonCard from "../../components/pokemonCard/pokemonCard.jsx";
import { Skeletons } from "../../components/Skeletons/Skeletons.jsx";

export const HomeView = () => {
    const [pokemons, setPokemons] = useState([]);
    const [allPokemons, setAllPokemons] = useState([]); // Estado para manter todos os Pokémons
    const [loading, setLoading] = useState(true); // Estado de carregamento

    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {
        var endpoints = [];

        for (var i = 1; i < 500; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
        }

        axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then((res) => {
                const pokemonData = res.map((response) => ({
                    name: response.data.name,
                    image: response.data.sprites.front_default, // Adicione a URL da imagem
                    types: response.data.types // Adicione os tipos
                }));
                setPokemons(pokemonData);
                setAllPokemons(pokemonData); // Salve todos os Pokémons
                setLoading(false); // Defina o estado de carregamento como falso após carregar os dados
            })
            .catch((err) => {
                console.log(err);
                setLoading(false); // Defina o estado de carregamento como falso em caso de erro
            });
    };

    const pokemonFilter = (name) => {
        if (name === "") {
            setPokemons(allPokemons); // Restaure todos os Pokémons se a pesquisa estiver vazia
        } else {
            const filteredPokemons = allPokemons.filter(pokemon => 
                pokemon.name.toLowerCase().includes(name.toLowerCase())
            );
            setPokemons(filteredPokemons);
        }
    };

    return (
        <>
            <NavBar pokemonFilter={pokemonFilter} />
            <Container maxWidth='false'>
                <Grid container spacing={3}>
                    {loading ? (
                        <Skeletons /> // Exiba o componente Skeletons enquanto os dados estão sendo carregados
                    ) : (
                        pokemons.map((pokemon, key) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={key}>
                                <PokemonCard name={pokemon.name} image={pokemon.image} types={pokemon.types} />
                            </Grid>
                        ))
                    )}
                </Grid>
            </Container>
        </>
    );
};