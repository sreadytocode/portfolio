import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Components/Header.js';
import Home from '../Components/Home.js';
import PersonalProfile from '../Components/PersonalProfile.js';
import Projects from '../Components/Projects.js';
import CodeClan from '../Components/CodeClan.js';
import CareerHistory from '../Components/CareerHistory.js';
import Hobbies from '../Components/Hobbies.js';
import ErrorPage from '../Components/ErrorPage.js';
import Education from '../Components/Education.js';
import NavBar from '../Components/NavBar.js';
import Image from '../Components/Image.js';
import Heading from '../Components/Heading.js';


const PortfolioContainer = () => {
    return ( 
        <>
            <Router>
                    <Heading text="Sara's Portfolio"/>
                    <Image/>
                    <NavBar/>
                    <br />
                    <br />
                <Routes>
                    <Route exact path="/" element={<Home/>}/> 
                    <Route path="/personalprofile" element={<PersonalProfile/>}/>
                    <Route path="/codeclan" element={<CodeClan/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/careerhistory" element={<CareerHistory/>}/>
                    <Route path="/education" element={<Education/>}/>
                    <Route path="/hobbies" element={<Hobbies/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            </Router>
        </>
     );
}
 
export default PortfolioContainer;