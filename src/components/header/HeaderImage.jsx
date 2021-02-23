import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from "@fortawesome/free-solid-svg-icons";

import './header-image.css';
import image from '../../assets/image/header2.jpg';

const HeaderImage = () => {
    return (
        <div className="container">
            <div className="header-img" style={{ backgroundImage: `url('${image}')`, backgroundSize: 'cover'}}>
                <div className="content">
                    <h1>Pr<FontAwesomeIcon icon={faGhost} />ject Manager</h1>
                    <h5>For Casper</h5>
                </div>
                <div className="img-cover"></div>
            </div>
        </div>
    );
}

export default HeaderImage;