import React from "react";
import styled, { keyframes } from "styled-components";
import Background from "../Img/cloud.jpeg"

const play = keyframes`
  
  100% { background-position: -1900px; }

`

const Title = styled.h1`
    padding: 1rem;
    text-align: center;
    font-size: 3.1em;
    font-family: 'Lobster', cursive;
    text-align: center;
    text-shadow: 2px 2px turquoise;
    background: url(${Background}); 
    color: darkblue;
    filter: contrast(1.1);
    animation: ${play} 50s linear infinite;
    background-position: 0px 0px;
    box-shadow: 0 0 8px 8px lightblue inset;
    transform: scale(1.1);
    background-repeat: repeat-x;
    background-size: 100%;
    
    /* filter: blur(0.5px); */
    `;

const Heading = ({text}) => {
    return ( 
        <>
            <Title>
                {text}
            </Title>
        </>
     );
}
 
export default Heading;