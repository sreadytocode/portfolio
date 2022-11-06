import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div `
    float: left;
`

const Image = () => {
    return ( 
        <ImageContainer>
        <img src={process.env.PUBLIC_URL + '/portfolio-pic.jpg'} alt="profile" width="300"/>
        </ImageContainer>
     );
}
 
export default Image;