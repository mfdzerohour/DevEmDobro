import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext.jsx"; // Ajuste o caminho se necessário
import Button from "@mui/material/Button";

const ThemeToggler = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <Button
            variant="contained"
            onClick={toggleTheme}
            sx={{ marginLeft: "1em" }}
        >
            {darkMode ? "Tema Claro" : "Tema Escuro"}
        </Button>
    );
};

export default ThemeToggler;