import React from 'react'
import about from "../../img/placeholder.png";

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img className="about-image" src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>I am <span>Taylor</span></h4>
                <p className="about-text">
                    I am a student at the University of Washington studying full stack web development and
                    design. I currently live in Anchorage, Alaska.
                    As I've grown as a developer, I have worked alongside many talented developers and designers who have
                    raised my standards for what's expected of any web application.
                    Through these experiences, I've had the opportunity to create memorable products that are not only
                    enjoyable to use but
                    are written in code that's maintainable and easy to understand.
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
                <a href="https://drive.google.com/file/d/1gmbP161AopO0UWNKukW6yvCiXTRycrUf/view?usp=sharing" className="resume-button">DOWNLOAD RESUME HERE!</a>
                {/* <button href="https://drive.google.com/file/d/1gmbP161AopO0UWNKukW6yvCiXTRycrUf/view?usp=sharing" className="btn">Download Resume</button> */}
            </div>
        </div>

    )
}

export default ImageSection;
