import React, {useState} from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="container">
            <div className="header-title">
            <a href="/">Pr<i className="fas fa-ghost"></i>ject Manager</a>
            </div>
        </div>
    );
}

export default Header;