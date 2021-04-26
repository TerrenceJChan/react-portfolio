import React from 'react';

const Navigation = (sectionNum) => {
    const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];
    return (
        <nav>
            <ul>
                {sections.map((sections) => (
                    <li
                        className={sectionNum.currentSection === sections ? "activeSection" : ""}
                        key={sections}
                    >
                        <span onClick={() => sectionNum.setCurrentSection(sections)}>{sections}</span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation;