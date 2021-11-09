import React from "react";
import FontAwesomeIcon from "react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Home() {
    return (
        <div className="HomePage">
            
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I'm
                    <span> Taylor &#x1F44B;</span>
                </h1>
                <p className="developer">
                    FULL STACK CERTIFIED WEB MANAGER AND DESIGNER
                </p>
                <div className="icons">
                    < FontAwesomeIcon icon={faFacebook} />
                </div>
            </header>
        </div>
    )
}

export default Home;