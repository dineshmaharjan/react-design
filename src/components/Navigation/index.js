import React from 'react';
import {NavLink} from 'react-router-dom';

const links = [
    {
        name: "Home",
        url: "/"
    },

    {
        name: "About",
        url: "/about"
    },
    {
        name: "Features",
        url: "/features"
    },
    {
        name: "Services",
        url: "/services"
    },
    {
        name: "Contact",
        url: "/contact"
    },

];

const ReactNavigation = () => {

    return (
        <div className="c-navigation">
            <ul className="nav-list">

                {
                    links.map((link, index) => (
                        <li key={index} className="nav-links"><NavLink to={link.url}>{link.name}</NavLink></li>
                    ))
                }

            </ul>

        </div>
    );
}

export default ReactNavigation;