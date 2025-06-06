import { useState } from "react";

const Form = (props) => {
const [inputs, setInputs] = useState({
                                        image: ''
                                    });
    
    const handleInputChange = (event) => {
        setInputs({
            image: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addCard(inputs);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="image">Endereço da imagem da carta: </label>
                    <input type="text" id="image" name="image" onChange={handleInputChange} value={inputs.image} />
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}

export default Form