import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import pokemonLogo from '../../images/pokemonLogo.png'; // Importe a imagem diretamente

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function NavBar({ pokemonFilter }) {
    const handleSearchChange = (event) => {
        pokemonFilter(event.target.value);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* Alterado position para "fixed" */}
            <AppBar position="fixed" sx={{ backgroundColor: '#373737' }}>
                <Toolbar>
                    <Box component='img' src={pokemonLogo} height='3em' />
                    <Search sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', width: '20%' }}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Buscar Pokemon..."
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={handleSearchChange} // Adicione o manipulador de eventos
                        />
                    </Search>
                </Toolbar>
            </AppBar>
            {/* Adicione um espaçamento maior para evitar sobreposição do conteúdo */}
            <Toolbar sx={{ marginBottom: '2em' }} />
        </Box>
    );
}