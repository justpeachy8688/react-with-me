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
            <SkillsSection skill={'Javascript'} progress={'70%'}/>
        </div>
    )
}

export default About;
