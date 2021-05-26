import React from 'react'
import about from "../../img/paris-img.jpg";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function ImageSection() {
    return (
        <Container className="about-me-page">
            <Row className="ImageSection">
                <Col className="col xs={6} md={4}">
                    <div className="img">
                        <img className="about-image" src={about} alt="" />
                    </div>
                </Col>
                <Col className="col xs={6} md={8} about-me-text">
                    <div className="about-info">
                        <h4><span>Taylor Sanders</span></h4>
                        <p className="about-text">
                            Full Stack Developer who studied at the University of Washington. I currently live in Anchorage, Alaska.
                            As I've grown as a developer, I have worked alongside many talented developers and designers who have
                            raised my standards for what's expected of any web application.
                            Through these experiences, I've had the opportunity to create memorable products that are not only
                            enjoyable to use but
                            are written in code that's maintainable and easy to understand.
                    </p>
                        {/* <div className="about-details">
                            <div className="left-section">
                                {/* <p>Full Name :</p>
                                <p>Age :</p> */}
                        {/* <p>Location :</p> */}
                        {/* </div> */}
                        {/* <div className="right-section"> */}
                        {/* <p> Taylor Sanders</p>
                                <p> 27</p> */}
                        {/* <p> Anchorage, Alaska</p> */}
                        {/* </div> */}
                        {/* </div>  */}
                        <Button href="https://drive.google.com/file/d/1Dg48K3UOy_t2uT2AVdF--mXRYVkiO-7h/view?usp=sharing" className="resume-button">Download Resume</Button>
                        {/* <button href="https://drive.google.com/file/d/1gmbP161AopO0UWNKukW6yvCiXTRycrUf/view?usp=sharing" className="btn">Download Resume</button> */}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ImageSection;
