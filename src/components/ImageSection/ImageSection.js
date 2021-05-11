import React from 'react'
import about from "../../img/CHS-img.jpeg";

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img className="about-image" src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>I am <span>Taylor</span></h4>
                <p className="about-text">
                    Veniam nostrud officia commodo incididunt anim consequat enim et duis mollit aliqua. Culpa tempor elit ad tempor dolore id. Officia est ex dolor dolor do ea cupidatat non aute quis sunt ut elit qui.
                    </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name </p>
                        <p>Age </p>
                        <p>Location </p>
                    </div>
                    <div className="right-section">
                        <p>: Taylor Sanders</p>
                        <p>: 27</p>
                        <p>: Anchorage, Alaskas</p>
                    </div>
                </div>
                <button className="btn">Download Resume</button>
            </div>
        </div>

    )
}

export default ImageSection;
