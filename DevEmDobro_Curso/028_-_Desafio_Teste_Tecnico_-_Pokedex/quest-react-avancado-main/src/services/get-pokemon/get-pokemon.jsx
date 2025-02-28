import axios from "axios"








export async function getPokemonInfo(name) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        return response
    }
    catch (error) {
        console.log('não foi possível buscar as informações')
    }
}