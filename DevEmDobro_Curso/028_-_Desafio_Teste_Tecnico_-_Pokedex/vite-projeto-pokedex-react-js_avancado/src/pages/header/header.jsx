import React, { useState } from "react";
import "./header.css";
import logoTipo from '../../images/pokemonLogo.png';
//Types of Pokemons
import bug from '../../images/typePokemon/bug.webp';
import dark from '../../images/typePokemon/dark.webp';
import dragon from '../../images/typePokemon/dragon.webp';
import eletric from '../../images/typePokemon/electric.webp';
import fairy from '../../images/typePokemon/fairy.webp';
import fighting from '../../images/typePokemon/fighting.webp';
import fire from '../../images/typePokemon/fire.webp';
import flying from '../../images/typePokemon/flying.webp';
import ghost from '../../images/typePokemon/ghost.webp';
import grass from '../../images/typePokemon/grass.webp';
import ground from '../../images/typePokemon/ground.webp';
import ice from '../../images/typePokemon/ice.webp';
import normal from '../../images/typePokemon/normal.webp';
import poison from '../../images/typePokemon/poison.webp';
import psychic from '../../images/typePokemon/psychic.webp';
import rock from '../../images/typePokemon/rock.webp';
import steel from '../../images/typePokemon/steel.webp';
import water from '../../images/typePokemon/water.webp';
//Find pokemon icon
// import findPokemonIcon from '../../images/find_pokemon.png';

const pokemonTypes = [
    { value: 'bug', label: 'Bug', icon: bug },
    { value: 'dark', label: 'Dark', icon: dark },
    { value: 'dragon', label: 'Dragon', icon: dragon },
    { value: 'eletric', label: 'Electric', icon: eletric },
    { value: 'fairy', label: 'Fairy', icon: fairy },
    { value: 'fighting', label: 'Fighting', icon: fighting },
    { value: 'fire', label: 'Fire', icon: fire },
    { value: 'flying', label: 'Flying', icon: flying },
    { value: 'ghost', label: 'Ghost', icon: ghost },
    { value: 'grass', label: 'Grass', icon: grass },
    { value: 'ground', label: 'Ground', icon: ground },
    { value: 'ice', label: 'Ice', icon: ice },
    { value: 'normal', label: 'Normal', icon: normal },
    { value: 'poison', label: 'Poison', icon: poison },
    { value: 'psychic', label: 'Psychic', icon: psychic },
    { value: 'rock', label: 'Rock', icon: rock },
    { value: 'steel', label: 'Steel', icon: steel },
    { value: 'water', label: 'Water', icon: water },
];

export const Header = () => {
    const [selectedType, setSelectedType] = useState('');

    const handleSelect = (type) => {
        setSelectedType(type);
    };

    return (
        <div className="header">
            <div className="logo">
                <img className="imgLogo" src={logoTipo} alt="Logotipo Pokemon" />
            </div>

            <div className="menu">
                <div className="selectPokemon">
                    <div className="dropdown">
                        <button className="dropbtn">{selectedType ? selectedType.label : 'Select Pokemon Type'}</button>
                        <div className="dropdown-content">
                            {pokemonTypes.map((type) => (
                                <div key={type.value} onClick={() => handleSelect(type)}>
                                    <img src={type.icon} alt={type.label} />
                                    {type.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};