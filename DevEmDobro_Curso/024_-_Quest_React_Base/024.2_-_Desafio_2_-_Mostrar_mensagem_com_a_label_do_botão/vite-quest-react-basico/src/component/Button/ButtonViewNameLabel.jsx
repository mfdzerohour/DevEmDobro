import "./ButtonColor.css";
import ButtonViewNameLabel from "./ButtonViewNameLabel.jsx";

const ButtonViewNameLabel = ({ label, onClick }) => {
    const handleClick = () => {
        alert(`A label desse botão é ${label}`);
    };

    return (
        <>
            <button onClick={onClick}>
                {label}
            </button>
        </>
    );
};

export default ButtonViewNameLabel;