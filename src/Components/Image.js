import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div `
    float: left;
    border-radius: 50%;
    margin: 50px;
`
const Img = styled.img`
    border-radius: 50%;
`

const Image = () => {
    return ( 
        <ImageContainer>
        <Img src={process.env.PUBLIC_URL + '/portfolio-pic.jpg'} alt="profile" width="300"/>
        </ImageContainer>
     );
}
 
export default Image;