//ele faz a "mesma" função do index.css pode apagar 
// ele colocar o export e importar no aquivo main.jsx
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: aquamarine;
    }

    p{
        color: orangered;
    }
`