import React, { useState } from 'react';
import Project from '../components/Project'
import portfolio from '../assets/json/portfolio.json';

const Portfolio = () => {
    const [projects] = useState(portfolio);
    return (
        <section>
            <h1>Portfolio</h1>
            <div className="portfolio-wrapper">
                <ul className="portfolio-projects-wrapper">
                    {projects.map(item => (
                        <Project key={item.key} item={item}/>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;