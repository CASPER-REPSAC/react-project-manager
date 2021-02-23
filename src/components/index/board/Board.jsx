import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from "@fortawesome/free-solid-svg-icons";

import './board.css';

const Board = () => {
    const [data, setData] = useState();

    useEffect(() => {
        const get_board_data = async() => {
            const get_data = await axios.get("/index");
            setData(get_data.data);
        }
        get_board_data();
    }, [])
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <div className="project-box">
                        <h4><FontAwesomeIcon icon={faGhost} /> Popular Project</h4>
                        {data && data.popular.map(d => <BuildPost data={d} key={d.post_idx}/>)}
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="project-box">
                        <h4><FontAwesomeIcon icon={faGhost} /> Recent Project</h4>
                        {data && data.post.data.map(d => <BuildPost data={d} key={d.post_idx}/>)}
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="project-box">
                        <h4><FontAwesomeIcon icon={faGhost} /> comment</h4>
                        {data && data.comment.map(d => <BuildPost data={d} key={d.comment_idx}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

const BuildPost = (prop) => {
    const badge = prop.data.tag.split(",");

    return (
        <div className="project-list">
            <div className="project-title">
                <a href="#" className="badge badge-pill badge-warning">{prop.data.type}</a>
                <a href={"/post/" + prop.data.post_idx}> test</a>
            </div>
            {badge.map((d,key) => <BuildBadge data={d} key={key}/>)}
            <div className="project-info">
                <span className="project-writer">{prop.data.writer}</span>
                <span className="project-date">{prop.data.post_date}</span>
            </div>
            <hr />
        </div>
    );
}

const BuildComment = (prop) => {
    return (
        <div class="project-list">
            <span class="project-title"><i class="fas fa-comments"></i> <a href={"/post/" + prop.data.post_idx}>{prop.data.comment_content}</a></span>
            <div class="project-info">
                <span class="project-writer">{prop.data.writer}</span>
                <span class="project-date">{prop.data.comment_date}</span>
            </div>
            <hr />
        </div>
    );
}

const BuildBadge = (prop) => {
    return (
        <a href="#" className="badge badge-pill badge-secondary">{prop.data}</a>
    );
}

export default Board;