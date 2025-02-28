import { createContext, useState } from "react";








export const themes = {
    light: {
        background: 'linear-gradient(151deg,  #FECC30 15%, #FFECAC 94%)' ,
        color: '#1034A6',
        
    },
    dark: {
        background: 'linear-gradient(319deg, #256eff 37%, #46237a 100%)',
        color: '#fff',
        

    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.dark)
    return(
        <ThemeContext.Provider value ={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
