import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import resumeThumbnail from '../assets/images/resume-thumbnail.png';

library.add(fab);
library.add(fas);

const Resume = () => {
    return (
        <section>
            <h1>Resume</h1>
            <div className="container-resume">
                <div>
                    <h2>Front-End</h2>
                    <ul>
                        <li><FontAwesomeIcon icon={['fab', 'html5']} /> HTML</li>
                        <li><FontAwesomeIcon icon={['fab', 'css3-alt']} /> CSS</li>
                        <li><FontAwesomeIcon icon={['fab', 'js']} /> JavaScript</li>
                        <li><FontAwesomeIcon icon={['fab', 'react']} /> React</li>
                    </ul>
                </div>
                <div>
                    <h2>Back-End</h2>
                    <ul>
                        <li><FontAwesomeIcon icon={['fab', 'node-js']} /> Node</li>
                        <li><FontAwesomeIcon icon={['fas', 'database']} /> MySQL, Mongoose</li>
                    </ul>
                </div>
                <div>
                    <h2>Other</h2>
                    <ul>
                        <li><FontAwesomeIcon icon={['fab', 'github']} /> Git, GitHub</li>
                        <li><FontAwesomeIcon icon={['fab', 'wordpress']} /> WordPress</li>
                        <li><FontAwesomeIcon icon={['fas', 'copy']} /> SEO</li>
                    </ul>
                </div>
                <div>
                    <h2>Resume</h2>
                    <a href={process.env.PUBLIC_URL + "/assets/documents/terrence-chan-resume-2021.pdf"} download target="_blank" rel="noreferrer">
                        <img src={resumeThumbnail} alt="Download Terrence's resume" id="img-resume" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Resume;