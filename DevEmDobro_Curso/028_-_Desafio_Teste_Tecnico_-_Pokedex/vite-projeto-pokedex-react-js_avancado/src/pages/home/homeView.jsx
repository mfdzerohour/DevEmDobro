// import { Header } from "../header/header.jsx";
// import { Footer } from "../footer/footer.jsx";
// import { Body } from "../body/body.jsx";
import "./home.css";
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar.jsx";
import PokemonCard from "../../components/pokemonCard/pokemonCard.jsx";

export const HomeView = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {
        var endpoints = [];

        for (var i = 1; i < 11; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon?limit=${i}`);
        }

        console.log(endpoints);

        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
        // return response.data;
        // axios
        //     .get("https://pokeapi.co/api/v2/pokemon?limit=10")
        //     .then((res) => setPokemons(res.data.results))
        //     .catch((err) => console.log(err));
    };

    return (
        <>
            {/* <div className="menuSuperior">
                <Header />
            </div>
            <div className="home">
                <Body />
            </div>
            <div className="menuInferior">
                <Footer />
            </div> */}

<NavBar />
            <Container maxWidth='false'>
                <Grid container spacing={2}>
                    {pokemons.map((pokemon, key) => (
                        <Grid item xs={3} key={key}>
                            <PokemonCard name={pokemon.data.name} />
                            
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};