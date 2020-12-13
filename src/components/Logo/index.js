import React from 'react';
import Logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

function ReactLogo() {
    
    return (

        <Link to="/" className="c-logo">
            <img src={Logo} alt="Company Name"/>
        </Link>
    );
}
export default ReactLogo;