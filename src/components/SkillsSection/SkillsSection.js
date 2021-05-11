import React from 'react'

function Skills({skill, progress}) {
    return (
        <div className="skills">
<div className="skills-container">
    <h5 className="skill-title">{skill}</h5>
    <div className="skill-bar">
    <p className="skill-text">{progress}</p>
        <div className="skill-progress"></div>
    </div>
</div>
        </div>
    )
}

export default Skills;
