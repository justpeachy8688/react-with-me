import React from "react";
import FontAwesomeIcon from "react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Home() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span> Taylor</span>
                </h1>
                <p>
                    Et sit et culpa proident minim ullamco eu et non duis. Adipisicing nostrud fugiat nisi duis ut elit tempor aliquip amet fugiat minim mollit excepteur Lorem. Irure nostrud sit aute aute deserunt id ullamco sint labore aute sint occaecat sit. Do sunt aute occaecat eu ullamco ut exercitation dolor quis cillum ex nisi.
                </p>
                <div className="icons">
                    < FontAwesomeIcon icon={faFacebook} />
                </div>
            </header>
        </div>
    )
}

export default Home;