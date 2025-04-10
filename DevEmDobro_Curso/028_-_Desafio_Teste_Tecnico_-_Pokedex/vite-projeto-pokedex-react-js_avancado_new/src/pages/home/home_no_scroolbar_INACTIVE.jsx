import React, { useState, useEffect } from "react";
import "./home.css";
import { Header } from "../header/header.jsx";
import { Footer } from "../footer/footer.jsx";
import { Body } from "../body/body.jsx";

export const HomeView = function HomeView() {
    const [homeHeight, setHomelHeight] = useState("75vh");

    useEffect(() => {
        const handleResize = () => {
            const menuSuperiorHeight =
                document.querySelector(".menuSuperior").offsetHeight;
            const menuInferiorHeight =
                document.querySelector(".menuInferior").offsetHeight;
            const windowHeight = window.innerHeight;

            const newHomeHeight =
                windowHeight - menuSuperiorHeight - menuInferiorHeight;
            setHomelHeight(`${newHomeHeight}px`);
        };

        handleResize(); // Calcula a altura inicial

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div className="menuSuperior">
                <Header />
            </div>
            <div className="home" style={{ height: homeHeight }}>
                <Body />
            </div>
            <div className="menuInferior">
                <Footer />
            </div>
        </>
    );
};
