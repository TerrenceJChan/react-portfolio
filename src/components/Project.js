import React from 'react';

const Project = (project) => {
    return (
        <li  className="project">
            <div>
                <img src={process.env.PUBLIC_URL + `/images/portfolio/${project.item.file}` } alt={`Thumbnail of ${project.item.title}`}>
                </img>
            </div>
            <div>
                <h2>{project.item.title}</h2>
                <p>{project.item.description}</p>
                <p><a href={project.item.github}>GitHub Repository</a></p>
                <p><a href={project.item.deployment}>Deployment</a></p>
            </div>
        </li>
    )
}

export default Project;