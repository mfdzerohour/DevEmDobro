import React from "react";
import "./header.css";

export const Header = () => {
    return (
        <>
            <div className="menuSuperior">
                <header>
                    <div className="logo">
                        <img
                            src="../../images/pokemonLogo.svg.png"
                            alt="Pokemon logo tipo"
                            crossOrigin="anonymous"
                        />
                    </div>
                    <div className="menu">
                        <div className="switch-container">
                            <label>Color Team Pokemon</label>
                            <div className="switch">
                                <div className="switch__inner">
                                    <input
                                        type="radio"
                                        id="switch1"
                                        name="switch"
                                    />
                                    <label htmlFor="switch1"></label>
                                    <input
                                        type="radio"
                                        id="switch2"
                                        name="switch"
                                    />
                                    <label htmlFor="switch2"></label>
                                    <input
                                        type="radio"
                                        id="switch3"
                                        name="switch"
                                    />
                                    <label htmlFor="switch3"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
};
