import React from "react";
import Header from "./Header";
import styled from "styled-components";

const Paragraph = styled.p`
    font-size: 1.35em;
    animation: pulse;
    animation-duration: 2s;
    color: darkblue;
`

const PersonalProfile = () => {
    return ( 
        <Paragraph>
            <Header text="Personal Profile"/>
            <p>Detailed orientated CodeClan student with a background in healthcare.</p>
            <p>Bringing forth a motivated attitude and a variety of powerful skills.</p> 
            <p>Such as the ability to multitask, excellent communication and team working skills.</p>
            <p>Adept at making critical decisions, managing high workloads and always very eager in learning new things.</p>
            <p>Over 5 years of extensive experience working in the NHS has led me to develop these transferrable skills. </p>
        </Paragraph>
     );
}
 
export default PersonalProfile;