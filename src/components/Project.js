import React from 'react';

const Project = (project) => {
    return (
        <div key={project.item.title} className="project">
            <div>
                <img src={process.env.PUBLIC_URL + `/images/portfolio/${project.item.file}` } alt={`Thumbnail of ${project.item.title}`}>
                </img>
            </div>
            <div>
                <h2>{project.item.title}</h2>
            </div>
        </div>
    )
}

export default Project;