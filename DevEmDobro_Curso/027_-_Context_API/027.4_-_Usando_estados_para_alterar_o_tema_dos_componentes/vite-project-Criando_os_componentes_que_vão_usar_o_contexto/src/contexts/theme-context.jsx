import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const themes = {
    light: {
        color: '#000000',
        backgroundColor: '#eeeeee'
    },

    dark: {
        color: '#ffffff',
        backgroundColor: '#000000'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [ theme, setTheme ] = useState ( themes.light );
    return (
        <ThemeContext.Provider value={{ theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};