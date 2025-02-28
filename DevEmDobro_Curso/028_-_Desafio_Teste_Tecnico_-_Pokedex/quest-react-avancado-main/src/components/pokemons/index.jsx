import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Cards } from "../cards/cards";
import styled from "styled-components";
import { Pokeball } from "../pokeball/pokeball";
import { Link } from "react-router-dom";
import { ThemeTogglerButton } from "../theme-toggler-button/theme-toggler-button";
import { getPokemonList } from "../../services/get-pokemons/get-pokemons-list.jsx";

import { filterPokemonByType, getPokemonTypes } from "../../services/get-pokemons-filtered-by-type/get-pokemons-filtered-by-type.jsx";
import { ThemeContext } from "../../context/theme-contexts.jsx";
import pokemonLogo from "../../images/pokemonLogo.svg.png"
import pokeball from "../../images/pokeball.png"
const PokeList = () => {
    const [pokemonList, setPokemonList] = useState([])
    const [types, setTypes] = useState([])
    const [selectedType, setSelectedType] = useState('')
    const [filteredPokemons, setFilteredPokemons] = useState([])
    const [offset, setOffset] = useState(0)
    const morePokemons = 10
    const { theme } = useContext(ThemeContext)

    const loadPokemons = async () => {
        setOffset(offset + morePokemons)
    }

    const handleSelect = (e) => {
        setSelectedType(e.target.value)
        loadPokemons()
    }

    useEffect(() => {
        fetchList()
        filterPokemons()
    }, [offset])

    async function fetchList() {
        const list = await getPokemonList(offset)
        const urls = list.map((result) => { return result.url })
        let endpoints = []
        urls.map((url) => { endpoints.push(url) })
        let response = await axios.all(endpoints.map(async (endpoint) => { return await axios.get(endpoint) }))
        setPokemonList([...pokemonList, ...response])
    }

    async function filterPokemons() {
        const typeList = await getPokemonTypes()
        setTypes(typeList)
        let pokemonsFilter = await filterPokemonByType(selectedType)
        let endpoints = []
        let urls = pokemonsFilter.map((result) => { return result.pokemon.url })
        urls.map((url) => { endpoints.push(url) })
        let response = await axios.all(endpoints.map(async (endpoint) => { return await axios.get(endpoint) }))
        setFilteredPokemons([...response])
    }

    return (

        <>
            <Main style={{ color: theme.color, backgroundImage: theme.background}}>
                <Nav>
                    <Link to={'/'}><Logo src={pokemonLogo} /></Link>
                    <Ul>
                        <Li>
                            <Select
                                style={{ color: theme.color }}
                                value={selectedType}
                                onChange={handleSelect}>
                                <option value="">Select a pokemon type</option>
                                {types.map((type, index) => {
                                    return (
                                        <option key={index}>
                                            {type}
                                        </option>
                                    )
                                })}
                            </Select>
                        </Li>
                        <Li><ThemeTogglerButton /></Li>
                    </Ul>
                </Nav>

                {selectedType === ""
                    && <Section>
                        {pokemonList.map((pokemon, index) => {
                            return (
                                <div key={index}>
                                    <Link style={{color: theme.color}} to={`/pokemon/${pokemon.data.name}`}>
                                        <Cards >
                                            <img src={pokemon.data.sprites?.front_default} alt="pokemon-image" />
                                            <PokemonName>{pokemon.data.name}</PokemonName>
                                        </Cards>
                                    </Link>
                                </div>
                            )
                        })}
                    </Section>}

                {selectedType != ""
                    && <Section>
                        {filteredPokemons.map((pokemon, index) => {
                            return (
                                <div key={index}>
                                    <Link style={{color: theme.color}} to={`/pokemon/${pokemon.data.name}`}>
                                        <Cards>
                                            <img src={pokemon.data.sprites?.front_default} alt="pokemon-image"></img>
                                            <PokemonName>{pokemon?.data.name}</PokemonName>
                                        </Cards>
                                    </Link>

                                </div>
                            )
                        })}
                    </Section>}
                <Div>
                    <Pokeball>
                        <PokeballImg src={pokeball} alt="pokeball-image" onClick={() => loadPokemons()} />
                    </Pokeball>
                </Div>
            </ Main>
        </>
    )
}

export { PokeList }

//Styles

const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2%;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    
    border-bottom-left-radius:20px;
    border-bottom-right-radius:20px;
    @media (max-width: 762px){
        flex-direction: column;
    }
`

const Li = styled.li`
    cursor: pointer;
    display: flex;
    align-items: center;
`

const Select = styled.select`//    
    width: 200px;
    background-color: transparent;
    padding-left: 5px;
    height: 30px;
    border: none;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    &focus{
        outline: none;
    }
`

const Logo = styled.img`
    width: 150px;
    @media (max-width: 762px){
        margin-bottom: 20px;
    }
`

const Section = styled.section`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 50px;    
    margin: 40px 0px 40px 0px;
    @media (max-width: 762px){
        grid-template-columns: 1fr ;
    }
`

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:  center;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const Div = styled.div`
    height: 180px;
    display:flex;
    justify-content: center;
    `

const PokeballImg = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 100%;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover{
    width: 100px;
    height: 100px;
    box-shadow: 0 0 30px 20px  yellow; 
    border: none;
    }   
`

const PokemonName = styled.h2`
    margin-bottom: 10px;
    font-weight: 400;
    letter-spacing: 0.1em;
    text-align:center;
`


const Ul = styled.ul`
    display: flex;
    gap: 40px;
    @media (max-width: 762px){
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
`