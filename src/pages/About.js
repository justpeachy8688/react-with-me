import React from 'react';
import Title from "../components/Title/Title";
import ImageSection from "../components/ImageSection/ImageSection";
import SkillsSection from "../components/SkillsSection/SkillsSection";
import ServiceSection from "../components/Services/ServicesSection";
import design from "../img/design2.svg";

function About() {
    return (
        <div className="About">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <div className="skillsContainer">
                <Title title={'Skills'} span={'Skills'} />
                <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'React Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Node Js'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'HTML'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Express'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'UI / UX Design'} progress={'80%'} width={'80%'} />
            </div>
            <br></br>
            <Title title={'Services'} span={'Services'} />
            <div className="services-container">
                <ServiceSection image={design} title={'Responsive Web Design / Development'}
                // text={'Lorem ipsum khjbf fh tre qawsd csda zxc df asd a adfsa  yhuk cvb.'}
                />
                <ServiceSection image={design} title={'Mobile App Development'}
                // text={'Lorem ipsum khjbf fh tre qawsd csda zxc df asd a adfsa  yhuk cvb.'}
                />
                <ServiceSection image={design} title={'Full Stack E-commerce Development'}
                // text={'Lorem ipsum khjbf fh tre qawsd csda zxc df asd a adfsa  yhuk cvb.'}
                />
            </div>
        </div>
    )
}

export default About;
