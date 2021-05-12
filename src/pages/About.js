import React from 'react';
import Title from "../components/Title/Title";
import ImageSection from "../components/ImageSection/ImageSection";
import SkillsSection from "../components/SkillsSection/SkillsSection";

function About() {
    return (
        <div className="About">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'Skills'} span={'Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'React Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Node Js'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'HTML'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Express'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'UI / UX Design'} progress={'80%'} width={'80%'} />

            </div>
        </div>
    )
}

export default About;
