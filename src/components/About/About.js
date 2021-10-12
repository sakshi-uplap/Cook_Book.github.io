import React from 'react';
import Abt from "../assets/abt.jpg";
import '../About/About.css';

function About() {
    return (
        <div className="about">
           <div className="aboutTop"
           style={{backgroundImage: `url(${Abt})`}}></div> 
           <div className="aboutBottom">
            <h1>About Us</h1>
            <p>Lorem ipsum is placeholder text commonly used in the graphic,
            print, and publishing industries for previewing layouts and visual mockups.
            Lorem ipsum is placeholder text commonly used in the graphic,
            print, and publishing industries for previewing layouts and visual mockups.
            Lorem ipsum is placeholder text commonly used in the graphic,
            print, and publishing industries for previewing layouts and visual mockups.</p>   
            </div> 
        </div>
    )
}

export default About;
