import React from "react";
import Header from "./Header";
import styled from "styled-components";

const Paragraph = styled.p`
    font-size: 1.8em;
`

const Home = () => {
    return ( 
        <Paragraph>
            <Header text="Hi, I am Sara Qureshi"/>
            <hr />
            <p>Welcome to my portfolio!</p>
            <p>Please click on the other buttons above to read more.</p>
            <p>Thank you!</p>
        </Paragraph>
     );
}
 
export default Home;