import styled from "styled-components"








const Cards = (props) => {

    return (
        <Div>
            {props.children}
        </Div>
    )
}

const Div = styled.div`   
    width: 18em;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    border: none;
    background-color: transparent;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
export { Cards }