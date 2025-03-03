import React from "react";
import "./header.css";
import logoTipo from '../../images/pokemonLogo.png';

export const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img className="imgLogo" src={logoTipo} alt="Logotipo Pokemon" />
            </div>
            <div className="menu">
                <div className="selectPokemon">
                    <select>
                        <option value="pikachu">Pikachu</option>
                        <option value="charmander">Charmander</option>
                        <option value="squirtle">Squirtle</option>
                    </select>
                    <button>...</button>
                </div>
                <div className="switch"></div>
            </div>
        </div>
    );
};
