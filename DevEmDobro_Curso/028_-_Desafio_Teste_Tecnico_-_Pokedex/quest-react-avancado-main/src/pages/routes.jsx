import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Pokemons } from "./pokemons"
import { Pokemon } from "./pokemon"






const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element = {<Pokemons />}/>
                <Route exact path='/pokemon/:name' element = {<Pokemon />}/> 
            </Routes>
        </BrowserRouter>
    )
}
export {AppRoutes }