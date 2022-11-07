import React from "react";
import styled from "styled-components";
import Background from "../Img/cloud.jpeg"

const Title = styled.h1`
    padding: 1rem;
    text-align: center;
    font-size: 3.1em;
    font-family: 'Lobster', cursive;
    text-align: center;
    text-shadow: 2px 2px turquoise;
    background-image: url(${Background});
    background-size: cover;
    color: darkblue;
    filter: contrast(1.1);
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