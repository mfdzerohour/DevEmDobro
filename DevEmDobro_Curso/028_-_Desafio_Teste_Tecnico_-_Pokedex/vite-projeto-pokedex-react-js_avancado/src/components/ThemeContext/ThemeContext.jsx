import React, { createContext, useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: darkMode ? "dark" : "light",
                },
            }),
        [darkMode]
    );

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};