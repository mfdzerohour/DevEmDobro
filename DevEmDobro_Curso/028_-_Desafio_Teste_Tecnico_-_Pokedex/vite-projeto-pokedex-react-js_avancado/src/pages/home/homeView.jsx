import "./home.css";
import { Header } from "../header/header.jsx";
import { Footer } from "../footer/footer.jsx";
import { Body } from "../body/body.jsx";

export const HomeView = () => {
    return (
        <>
            <div className="menuSuperior">
                <Header />
            </div>
            <div className="home">
                <Body />
            </div>
            <div className="menuInferior">
                <Footer />
            </div>
        </>
    );
}