import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Project from './Portfolio';
import Resume from '../components/Resume';
import Contact from '../components/Contact';

const Header = () => {
    const [currentSection, setCurrentSection] = useState("About Me");
    const renderSection = () => {
        switch (currentSection) {
            case "About Me":
                return <About />;
            case "Portfolio":
                return <Project />;
            case "Contact":
                return <Resume />;
            case "Resume":
                return <Contact />;
        }
    }

    return (
        <>
            <header>
                <Navigation
                    currentSection={currentSection}
                    setCurrentSection={setCurrentSection}
                />
            </header>
            <main>
                {renderSection(currentSection)}
            </main>
        </>
    );
}

export default Header;