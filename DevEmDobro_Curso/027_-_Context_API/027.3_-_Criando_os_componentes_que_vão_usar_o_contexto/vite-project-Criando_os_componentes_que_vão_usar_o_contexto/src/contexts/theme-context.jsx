import { createContext } from "react";
import PropTypes from 'prop-types';

export const themes = {
    light: {
        color: '#000000',
        background: '#eeeeee'
    },

    dark: {
        color: '#ffffff',
        background: '#000000'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
    return (
        <ThemeContext.Provider value={{themes}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};