import React from 'react';
import ReactLogo from '../Logo';
import ReactNavigation from '../Navigation';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
const ReactHeader = () => {

    function handleOnClick() {
        
        
    }

    return (

        <div className="c-header">

            <div className="c-container">
                <div className="c-nav">
                    <ReactLogo />
                    <ReactNavigation />
                    <div className="c-menu">
                        <FontAwesomeIcon icon={faBars} onClick={handleOnClick}/>
                    </div>
                </div>

            </div>

        </div>
    );


}

export default ReactHeader;