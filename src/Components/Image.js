import React from "react";
import styled, { keyframes } from "styled-components";

const BorderAnimation = keyframes`
 0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-20px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
`

const ImageContainer = styled.div `
    float: left;
    border-radius: 50%;
    margin: 50px;
    animation: ${BorderAnimation} 4s infinite linear;
    background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
    box-shadow: 3px 2px 2px 2px lightyellow;
    
    
`
const Img = styled.img`
    border-radius: 50%; 
    border: 5px dotted darkmagenta;
`

const Image = () => {
    return ( 
        <ImageContainer>
        <Img src={process.env.PUBLIC_URL + '/portfolio-pic.jpg'} alt="profile" width="300"/>
        </ImageContainer>
     );
}
 
export default Image;