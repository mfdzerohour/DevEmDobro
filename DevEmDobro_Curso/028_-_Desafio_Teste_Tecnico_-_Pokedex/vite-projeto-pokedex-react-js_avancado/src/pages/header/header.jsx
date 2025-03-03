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
import findPokemonIcon from '../../images/find_pokemon.png';

export const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img className="imgLogo" src={logoTipo} alt="Logotipo Pokemon" />
            </div>

            <div className="menu">
                <div className="selectPokemon">
                    <select>
                        <option></option>
                        <option value="bug"> 
                            <img src={`${bug}`} alt="Bug"/>
                            Bug
                        </option>
                        <option value="dark">
                            <img src={`${dark}`} alt="Dark" />
                            Dark
                        </option>
                        <option value="dragon">
                            <img src={`${dragon}`} alt="Dragon" />
                            Dragon
                        </option>
                        <option value="eletric">
                            <img src={`${eletric}`} alt="Eletric" />
                            Electric
                        </option>
                        <option value="Fairy">
                            <img src={`${fairy}`} alt="Fairy" />    
                            Fairy
                        </option>
                        <option value="Fighting">
                            <img src={`${fighting}`} alt="Fighting" />
                            Fighting
                        </option>
                        <option value="Fire">
                            <img src={`${fire}`} alt="Fire" />
                            Fire
                        </option>
                        <option value="Flying">
                            <img src={`${flying}`} alt="Flying" />
                            Flying
                        </option>
                        <option value="Ghost">
                            <img src={`${ghost}`} alt="Ghost" />
                            Ghost
                        </option>
                        <option value="Grass">
                            <img src={`${grass}`} alt="Grass" />
                            Grass
                        </option>
                        <option value="Ground">
                            <img src={`${ground}`} alt="Ground" />
                            Ground
                        </option>
                        <option value="Ice">
                            <img src={`${ice}`} alt="Ice" />
                            Ice
                        </option>
                        <option value="Normal">
                            <img src={`${normal}`} alt="Normal" />
                            Normal
                        </option>
                        <option value="Poison">
                            <img src={`${poison}`} alt="Poison" />
                            Poison
                        </option>
                        <option value="Psychic">
                            <img src={`${psychic}`} alt="Psychic" />
                            Psychic
                        </option>
                        <option value="Rock">
                            <img src={`${rock}`} alt="Rock" />
                            Rock
                        </option>
                        <option value="Steel">
                            <img src={`${steel}`} alt="Steel" />
                            Steel
                        </option>
                        <option value="Water">
                            <img src={`${water}`} alt="Water" />
                            Water
                        </option>
                    </select>
                    <button typeof="submit">
                        <img src={findPokemonIcon} alt="find pokemon" height={14} />
                    </button>
                </div>
                <div className="switch">
                </div>
            </div>
        </div>
    )
}