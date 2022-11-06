import React from "react";
import Header from "./Header";
import styled from "styled-components";

const Container = styled.div`
    animation: pulse;
    animation-duration: 2s;
`

const CareerHistory = () => {
    return ( 
        <Container>
            <Header text="Career History"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            <p>Saepe enim recusandae dolore quis exercitationem, esse expedita ipsa ad est eligendi ea aspernatur reiciendis facere temporibus amet praesentium incidunt culpa voluptates.</p>
            <p>Dicta odio corporis pariatur quae, illum dolorem cum modi tempora quisquam culpa dolore harum qui facilis? Error enim explicabo repellendus odit possimus!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, veniam omnis porro reprehenderit perspiciatis saepe aspernatur, ipsum delectus repellendus, sequi nihil perferendis amet. </p>
        </Container>
     );
}
 
export default CareerHistory;