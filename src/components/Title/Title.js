import React from 'react';
import "./Title.css";

function Title({ title, span }) {
    return (
        <div>
            <div className="title">
                <h3>
                    {title}
                    <span>{span}</span>
                </h3>
            </div>
        </div>
    )
}

export default Title;
