import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const Footer = () => {
    return (
        <footer>
            <ul>
                <li><a href="https://github.com/TerrenceJChan" aria-label="Link to GitHub profile"><FontAwesomeIcon icon={['fab', 'github-square']} /></a></li>
                <li><a href="https://www.linkedin.com/in/terrencejchan/" aria-label="Link to LinkedIn profile"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
                <li><a href="https://steamcommunity.com/profiles/76561198067404706/" aria-label="Link to Steam profile"><FontAwesomeIcon icon={['fab', 'steam-square']} /></a></li>
            </ul>
        </footer>
    )
}

export default Footer;