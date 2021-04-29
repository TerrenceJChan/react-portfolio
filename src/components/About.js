import React from 'react';
import profilePicture from '../assets/images/terrence.jpg';

const About = () => {
    return (
        <section className="section">
            <h1>Terrence Chan</h1>
            <img src={profilePicture} className="profilePicture" alt="Terrence" />
            <p className="text-regular">Based in <span className="highlight-text">Waterloo, Ontario</span>, I'm a recent graduate of the <span className="highlight-text">University of Waterloo</span> as of 2020. My academic foci were <span className="highlight-text">business, political science, and economics</span>. Inspired by the fast-paced world being driven in Canada's fastest growing tech hub, <span className="highlight-text">I decided to study code</span> as well. With additional education from the <span className="highlight-text">University of Toronto's Coding Boot Camp</span>, I extensively studied both <span className="highlight-text">front-end and back-end development</span>, making me a competent <span className="highlight-text">full-stack developer</span>. I am always looking for new adventures. Below are some of my past projects.</p>
        </section>
    );
}

export default About;