import React from "react";

const Image = () => {
    return ( 
        <>
        <img src={process.env.PUBLIC_URL + '/portfolio-pic.jpg'} alt="profile" width="200"/>
        </>
     );
}
 
export default Image;