import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Portfolio from './Portfolio';
import Resume from '../components/Resume';
import Contact from '../components/Contact';

const Header = () => {
    const [currentSection, setCurrentSection] = useState("About Me");
    const renderSection = () => {
        switch (currentSection) {
            default:
                return <About />;
            case "Portfolio":
                return <Portfolio />;
            case "Contact":
                return <Contact />;
            case "Resume":
                return <Resume />;
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