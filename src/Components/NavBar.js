import React from "react";
import { Link } from "react-router-dom";
import Buttons from "../Components/Buttons.js"


const NavBar = () => {
    return ( 
        <>
            <Link to="/portfolio"><Buttons text="Home"/></Link>
            <Link to="/personalprofile"><Buttons text="Personal Profile"/></Link>
            <Link to="/codeclan"><Buttons text="CodeClan"/></Link>
            <Link to="/projects"><Buttons text="Projects"/></Link>
            <Link to="/careerhistory"><Buttons text="Career History"/></Link>
            <Link to="/education"><Buttons text="Education"/></Link>
            <Link to="/hobbies"><Buttons text="Hobbies"/></Link>
        </>
     );
}
 
export default NavBar;