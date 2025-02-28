import axios from "axios"
    
    
    
    
    
    
    
    
export async function getPokemonList(offset) {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
            return response.data.results

        } catch (error) {
            console.log(error)
        }
    }