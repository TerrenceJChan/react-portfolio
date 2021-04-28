import React from 'react';

const Project = (project) => {
    return (
        <div className="each-slide">
            <div style={{ 'backgroundImage': `../assets/images/portfolio-small/${project.file}` }}>
                <span>{`${project.description}`}</span>
            </div>
        </div>
    )
}

export default Project;