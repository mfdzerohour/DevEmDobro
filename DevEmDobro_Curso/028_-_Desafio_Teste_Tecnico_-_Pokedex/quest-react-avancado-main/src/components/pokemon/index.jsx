import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { ThemeTogglerButton } from "../theme-toggler-button/theme-toggler-button";
import { getPokemonInfo } from "../../services/get-pokemon/get-pokemon";
import { ThemeContext } from "../../context/theme-contexts";
import pokemonLogo from "../../images/pokemonLogo.svg.png"

const PokemonDetails = () => {
    const [pokemonInfo, setPokemonInfo] = useState({
        name: '',
        image: '',
        height: '',
        weight: ''
    })

    const { theme } = useContext(ThemeContext)
    const [moves, setMoves] = useState([])
    const [abilities, setAbilities] = useState([])
    const [types, setTypes] = useState([])
    const params = useParams()

    useEffect(() => {
        async function fetchData() {
            const pokemon = await getPokemonInfo(params.name)
            const movesData = (pokemon.data.moves.map((move) => { return move.move }))
            const typesData = pokemon.data.types.map((type) => { return type.type.name })
            let endpoints = []
            const abilitiesUrl = pokemon.data.abilities.map((ability) => { return ability.ability.url })
            abilitiesUrl.map((url) => { endpoints.push(url) })
            let response = await axios.all(endpoints.map(async (endpoint) => { return await axios.get(endpoint) }))
            const abilitiesData = (response.map((data) => { return data.data }))

            setPokemonInfo({

                name: pokemon.data.name,
                image: pokemon.data.sprites?.front_default,
                height: pokemon.data.height,
                weight: pokemon.data.weight
            })
            setMoves(movesData)
            setAbilities(abilitiesData)
            setTypes(typesData)
        }

        fetchData()
    }, [])

    return (
        <Card style={{ color: theme.color, background: theme.background}}>

            <Nav>
                <Link to={'/'}><Logo src={pokemonLogo} /></Link>
                <ThemeTogglerButton />
            </Nav>

            <Container>
                <NameAndStats>
                    <NameImage>
                        <Name>{pokemonInfo.name}</Name>
                        <Img src={pokemonInfo.image} alt="pokemon-image" />
                    </NameImage>
                    <StatsContainer>
                        <TypeSection>
                            <Label>Type</Label>
                            <TypeArea>
                                {types.map((type, index) => {
                                    return (
                                        <div key={index}>
                                            <PkType>{type}</PkType>
                                        </div>
                                    )
                                })}
                            </TypeArea>
                        </TypeSection>
                        <Section>
                            <Label>Characteristics</Label>
                            <HeightAndWeight>
                                <p>Height - {pokemonInfo.height * 10} cm</p>
                                <p>Weight - {pokemonInfo.weight / 10} Kg</p>
                            </HeightAndWeight>
                        </Section>
                        <Section>
                            <Label>Abilities</Label>
                            <Abilities>
                                {abilities.map((ability, index) => {
                                    return (
                                        <div key={index}>
                                            <AbilityName>{ability.name}</AbilityName>
                                            <AbilityDescription>{ability.effect_entries.filter((text) => { return text.language.name === 'en' }).map((effect) => { return effect.effect })}</AbilityDescription>
                                        </div>
                                    )
                                })}
                            </Abilities>
                        </Section>
                    </StatsContainer>
                </NameAndStats>
                <Moves>
                    <MovesTitle>Moves</MovesTitle>
                    <MovesList>
                        {moves.map((move, index) => {
                            return (
                                <ul key={index}>
                                    <Li>{move.name}</Li>
                                </ul>
                            )
                        })}

                    </MovesList>
                </Moves>
            </Container>

        </Card>
    )
}

export { PokemonDetails }

//Styles

const Card = styled.main`
    background-size: cover;
`

const Logo = styled.img`
    width: 150px;
`

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
        align-items: center;
        gap: 30px;
    }
`

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 3%;
    gap: 50px;
        @media (max-width: 762px){
        display: flex;
        flex-direction: column;

    }
`

const NameImage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
`

const Name = styled.p`
    font-size: 30px;
`

const Img = styled.img`
    width: 150px;
`

const NameAndStats = styled.div`
    @media (max-width: 762px){
        width: 100%;
    }
`

const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;    
    align-items: center; 
    @media (max-width: 762px){
     font-size: 14px;
    }
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
        @media (max-width: 762px){
        align-items: center;
    }

`

const TypeSection = styled.div`
    border-top: none;
    display: flex;
    flex-direction: column;
    @media (max-width: 762px){
        align-items: center;
    }
`

const TypeArea = styled.div`
    display: flex;

    width: 450px;
    justify-content: space-around;
    height: 50px;
    align-items: center;
    padding: 5px;
    border: none;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    @media (max-width: 762px){
        width: 250px;
    }
`

const Label = styled.label`
    font-size: 23px;
    height: 30px;
    width: 450px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: block;
    text-align: center;
    @media (max-width: 762px){
        margin-top: 20px;
    }
`


const PkType = styled.p`
    
`

const HeightAndWeight = styled.div`
    width: 450px;
    display: flex;
    justify-content: space-around;
    height: 50px;
    align-items: center;
    padding: 5px;
    border: none;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        @media (max-width: 762px){
        width: 250px;
        
    }
`

const Abilities = styled.div`
    display: flex;
    gap: 20px;
    width: 450px;
    padding: 10px;
    align-items: center;
    padding: 5px;
    border: none;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-bottom: 100px;
        @media (max-width: 762px){
        width: 250px;     
        margin-bottom: 20px;
    }
`

const AbilityName = styled.p`
    font-size: 18px;
    margin-bottom: 5px;
    text-align: center;
    font-weight: 500;
`

const AbilityDescription = styled.p`
    font-size: 15px;
    text-align: center;
     @media (max-width: 762px){
        font-size: 12px;     
    }
`

const Moves = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MovesList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    @media (max-width: 762px){
        width: 100%;
        padding: 3%;     
    }
`

const Li = styled.li`
    list-style: none;
    padding: 5px;

    border: none;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const MovesTitle = styled.label`
    font-size: 20px;
    height: 40px;
    
`