import axios from "axios"








export async function getPokemonTypes() {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/type/`)
        return response.data.results.map((type) => { return type.name })
    } catch (error) {
        console.log(error)
    }
}

export async function filterPokemonByType(selectedType) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/type/${selectedType}`)
        return response?.data?.pokemon
    } catch (error) {
        console.log(error)
    }
}