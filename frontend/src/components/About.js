import React from 'react';
import '../styles/About.css';
import ucfImage from '../images/UCF_campus_image.jpg'

function About(){
    return(
        <div id="content">
            <img src={ucfImage}></img>
            <div className="about-text">
                <h1>About the Creator</h1>
                <p>I am the creator of this marvolus site</p>
            </div>
        </div>
    );
};

export default About;