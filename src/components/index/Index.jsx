import React, {useEffect, useState} from 'react';
import DarkModeToggle from "react-dark-mode-toggle";

import Header from '../header/Header';
import './index.css';
import './darkwhite.css';

const IndexPage = (props) => {
    const [isDarkMode, setIsDarkMode] = useState(props.getTheme === "dark" ? true : false);
    const setTheme = () => props.switchTheme();

    return (
        <>
            <Header />
            <div className="menu">
                <div className="container">
                    <div className="dark-mode float-right">
                        <button type="button" className="btn btn-success menu-btn">All</button>
                        <button type="button" className="btn btn-secondary menu-btn">Casper</button>
                        <button type="button" className="btn btn-secondary menu-btn">Personal</button>
                        <span onClick={setTheme}><DarkModeToggle
                            onChange={setIsDarkMode}
                            checked={isDarkMode}
                            size={85}
                        /></span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndexPage;