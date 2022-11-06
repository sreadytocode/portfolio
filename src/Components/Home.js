import React from "react";
import Header from "./Header";
import styled from "styled-components";

const Paragraph = styled.p`
    font-size: 1.65em;
    display: inline-block;
    margin: 0 0.5rem;
    animation: pulse;
    animation-duration: 2s;
    margin-right: auto;
`

const Home = () => {
    return ( 
        <Paragraph>
            <Header text="Hi, I am Sara Qureshi"/>
            <p>I am a CodeClan Student</p>
            <p>Welcome to my portfolio!</p>
            <p>Please click on the other buttons above to read more.</p>
            <p>Thank you!</p>
        </Paragraph>
     );
}
 
export default Home;