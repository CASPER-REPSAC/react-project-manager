import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Example from './Modal';
import {IsLogin} from '../feature/Check';

import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
    const [is_login, setIsLogin] = useState(false);

    useEffect(async () => {
        const result = await IsLogin();
        setIsLogin(result);
    }, [])

    return (
        <div className="container">
            <div className="header-title">
                <a href="/">Pr<FontAwesomeIcon icon={faGhost} />ject Manager</a>
            </div>
            <div className="header-menu float-right">
                <a className="menu-btn" href="https://github.com/CASPER-REPSAC/react-project-manager/issues" target="_blank"><button type="button" className="btn btn-info"><FontAwesomeIcon icon={faGithub}/> Bug Report</button></a>
                {is_login === false ? 
                    <a className="menu-btn" href={"//" + window.location.hostname + ":8081/login"}><button type="button" className="btn btn-secondary"><FontAwesomeIcon icon={faGoogle}/> Login</button></a>
                    :
                    <>
                        <Example />
                        <a className="menu-btn" href="/write"><button type="button" className="btn btn-secondary">Write</button></a>
                        <a className="menu-btn" href={"//" + window.location.hostname + ":8081/logout"}><button type="button" className="btn btn-secondary">Logout</button></a>
                    </>
                }
            </div>
        </div>
    );
}

export default Header;