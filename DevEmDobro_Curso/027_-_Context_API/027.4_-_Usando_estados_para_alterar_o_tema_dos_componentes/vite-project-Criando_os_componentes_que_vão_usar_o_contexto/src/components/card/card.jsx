import React, { useContext} from "react"
import { ThemeContext } from "../../contexts/theme-context.jsx";

export const Card = () => {

    const { theme } = useContext(ThemeContext)
    return (
        <div>
            <div style={{color: theme.color, backgroundColor: theme.backgroundColor}}>
                <h1>Título do card</h1>
                <p>Parágrafo do card, Parágrafo do card, Parágrafo do card, Parágrafo do card.</p>
            </div>
        </div>
    )
}