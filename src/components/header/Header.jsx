import React, {useState} from 'react';

import Example from './Modal';
import HeaderImage from './HeaderImage';

import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
    return (
        <div className="container">
            <div className="header-title">
                <a href="/">Pr<FontAwesomeIcon icon={faGhost} />ject Manager</a>
            </div>
            <div className="header-menu float-right">
                <a className="menu-btn" href="https://github.com/CASPER-REPSAC/project-manager/issues" target="_blank"><button type="button" className="btn btn-info"><FontAwesomeIcon icon={faGithub}/> Bug Report</button></a>
                <a className="menu-btn" href="/login"><button type="button" className="btn btn-secondary"><FontAwesomeIcon icon={faGoogle}/> Login</button></a>
                <Example />
                <a className="menu-btn" href="/write"><button type="button" className="btn btn-secondary">Write</button></a>
                <a className="menu-btn" href="/logout"><button type="button" className="btn btn-secondary">Logout</button></a>
            </div>
        </div>
    );
}

export default Header;