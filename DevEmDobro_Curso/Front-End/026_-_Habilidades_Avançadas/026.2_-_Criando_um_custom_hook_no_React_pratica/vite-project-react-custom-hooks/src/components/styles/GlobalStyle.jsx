//ele faz a "mesma" função do index.css pode apagar
// ele colocar o export e importar no aquivo main.jsx
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    button{
		border-radius: 8px;
		border: 1px solid transparent;
		padding: 0.6em 1.2em;
		font-size: 1em;
		font-weight: 500;
		font-family: inherit;
		background-color: orange;
		color: aliceblue;
		cursor: pointer;
		transition: border-color 0.25s;
	}

	button:hover {
		border-color: orangered;
	}
`
