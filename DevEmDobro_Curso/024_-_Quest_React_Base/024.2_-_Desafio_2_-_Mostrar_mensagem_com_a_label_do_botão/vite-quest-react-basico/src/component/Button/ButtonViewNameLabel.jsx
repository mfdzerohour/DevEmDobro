// import ButtonViewNameLabel from "./ButtonViewNameLabel.jsx";

const ButtonViewNameLabel = ({ label }) => {
    const handleClick = () => {
        alert(`A label desse botão é: ${label}`);
    };

    return (
        <>
            <button onClick={handleClick} className="btn2">
                {label}
            </button>
        </>
    );
};

export default ButtonViewNameLabel;