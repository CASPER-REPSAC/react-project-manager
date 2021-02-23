import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from "@fortawesome/free-solid-svg-icons";

import './board.css';

const Board = () => {
    return (
        <div className="project-box">
            <h4><FontAwesomeIcon icon={faGhost} /> Popular</h4>
            <div className="project-list">
                <div className="project-title">
                    <a href="#" className="badge badge-pill badge-warning">casper</a>
                    <a href="/post/<%= popular[i].post_idx %>"> test</a>
                </div>
                <a href="#" className="badge badge-pill badge-secondary">web</a>
                <div className="project-info">
                    <span className="project-writer">김종민</span>
                    <span className="project-date">2020.10.10</span>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Board;