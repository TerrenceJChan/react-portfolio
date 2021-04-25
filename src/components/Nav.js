import React, { useState } from "react";

const Nav = () => {
    const [menu] = useState([
        {
            text: 'Bio',
            link: '#bio',
        },
        {
            text: 'Projects',
            link: '#projects'
        },
        {
            text: 'Contact',
            link: '#contact'
        }
    ]);
    const [currentItem, setCurrentItem] = useState(menu[0]);

    return (
        <header>
            <nav className="nav">
                <h2 id="logo">Terrence Chan</h2>
                {menu.map((item) => (
                    <li id={`#${currentItem.link === item.link}`} key={item.text}>
                        <a href={`${item.link}`}
                            onClick={() => {
                                setCurrentItem(item);
                            }}
                        >
                            {item.text}
                        </a>
                    </li>
                ))}
            </nav>
        </header>

    );
}

export default Nav;