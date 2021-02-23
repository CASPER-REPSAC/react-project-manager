import React, {useEffect, useState} from 'react';
import DarkModeToggle from "react-dark-mode-toggle";

import Header from '../header/Header';
import HeaderImage from '../header/HeaderImage';
import Board from './board/Board';
import Footer from '../footer/Footer';

import './index.css';

const IndexPage = (props) => {
    const [isDarkMode, setIsDarkMode] = useState(props.getTheme === "dark" ? true : false);
    const setTheme = () => props.switchTheme();

    return (
        <>
            <Header />
            <HeaderImage />
            <div className="menu container">
                <div className="dark-mode float-right">
                    <button type="button" className="btn btn-success menu-btn">All</button>
                    <button type="button" className="btn btn-secondary menu-btn">Casper</button>
                    <button type="button" className="btn btn-secondary menu-btn">Personal</button>
                    <span onClick={setTheme}>
                        <DarkModeToggle
                            onChange={setIsDarkMode}
                            checked={isDarkMode}
                            size={85}
                        />
                    </span>
                </div>
                <br />
            </div>
            <Board />
            <Footer />
        </>
    );
}

export default IndexPage;