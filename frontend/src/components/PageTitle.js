import React, { useEffect } from 'react';
import '../styles/PageTitle.css'

function PageTitle(){

    const underlineText = () => {
        if(window.location.pathname === "/"){
            document.getElementById("home").style.textDecoration = "underline"
        }
        else if(window.location.pathname === "/About"){
            document.getElementById("about").style.textDecoration = "underline"
        }
        else if(window.location.pathname === "/Contact"){
            document.getElementById("contact").style.textDecoration = "underline"
        }
        
    }

    useEffect (() => {
        underlineText();
    })

    const home = async event => {
        event.preventDefault();
        window.location.href = "/";
    }

    const about = async event => {
        event.preventDefault();
        window.location.href = "/About";
    }

    const contact = async event => {
        event.preventDefault();
        window.location.href="/Contact";
    }

    return(
        <div className="title-bar">
            <div className="column1">
                <h2>UCF Water Fountian</h2>
            </div>
            <div className="column2">
                <button onClick={home} className="btn-title" id="home">Home</button>
                <b> | </b>
                <button onClick={about} className="btn-title" id="about">About</button>
                <b> | </b>
                <button onClick={contact} className="btn-title" id="contact">Contact</button>
            </div>
            <div className="column3">
                <button className="btn-title">Log In</button>
                {/* BTN changes label once logged in. Opens pop up if not logged it drop down if logged in */}
            </div>
        </div>
    );
};

export default PageTitle;