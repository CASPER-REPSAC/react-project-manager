import React, {useState} from 'react';
import DarkModeToggle from "react-dark-mode-toggle";

import Header from '../header/Header';
import './index.css';
import './darkwhite.css';

const IndexPage = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => false);

    return (
        <>
            <Header />
            <div className="menu">
                <div className="container">
                    <div className="dark-mode float-right">
                        <button type="button" className="btn btn-success menu-btn">All</button>
                        <button type="button" className="btn btn-secondary menu-btn">Casper</button>
                        <button type="button" className="btn btn-secondary menu-btn">Personal</button>
                        <DarkModeToggle
                            onChange={setIsDarkMode}
                            checked={isDarkMode}
                            size={85}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndexPage;