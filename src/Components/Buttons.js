import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button `
    font-size: 1.1em;
    padding: 1em;
    margin: .5em;
    &:hover {
    background: turquoise;
    }
    background-color: lightblue;
    border-radius: 5px;   
    font-weight: bold;
    font-family: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
    box-shadow: 2px 2px 2px 2px turquoise;
    color: darkblue;
`

const Buttons = ({text, clickHandler, value, isDisabled=false}) => {
    return ( 
        <ButtonContainer disabled={isDisabled} value={value} onClick={clickHandler}>
            {text}
        </ButtonContainer>
     );
}
 
export default Buttons;