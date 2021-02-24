import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost,faCommentDots, faChevronUp, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import DarkModeToggle from "react-dark-mode-toggle";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Comment from './comment/Comment';

import './post.css';

const Post = (props) => {
    const post_idx = props.idx.match.params.idx;
    const [post, setPost] = useState();
    const [post_attach, setPostAttach] = useState();
    const [comment, setComment] = useState();
    const [comment_image, setCommentImage] = useState();
    const [user_image, setUserImage] = useState();
    const [isDarkMode, setIsDarkMode] = useState(props.getTheme === "dark" ? true : false);
    const [is_loading, setLoading] = useState(true);

    const setTheme = () => props.switchTheme();
    useEffect(() => {
        axios.get(`/post/${post_idx}`)
        .then(res => {
            if(res.data.result == "success"){
                setPost(res.data.post);
                setPostAttach(res.data.post_attach);
                setComment(res.data.comment);
                setCommentImage(res.data.comment_image);
                setUserImage(res.data.user_image);
                setLoading(false);
            }
            else{
                alert(res.data.message);
                window.location.href = '/';
            }
        })
    }, [])

    if(is_loading) return <></>;

    return (
        <>
            <Header />
            <div className="container menu" onClick={setTheme}>
                <div className="float-right">
                    <DarkModeToggle
                        onChange={setIsDarkMode}
                        checked={isDarkMode}
                        size={85}
                    />
                </div>
            </div><br />
            <div className="container contents-box">
                <div className="row">
                    <div className="col-sm-1">
                        <div className="like-unlike">
                            <FontAwesomeIcon icon={faChevronUp} />
                        </div>
                        <div className="like-unlike like-unlike-count">
                            {post && post.like_count}
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <div className="project-title">
                            <h1><FontAwesomeIcon icon={faGhost} /> {post && post.title}</h1>
                        </div>
                        <div className="project-subtitle">
                            <h4>{post && post.subtitle}</h4>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <span className="project-writer">{post && post.writer}</span>
                        <span className="project-date"> {post && post.project_date}</span>
                        <div className="project-tag">
                            <a href="#" className="badge badge-pill badge-secondary">web</a>
                        </div>
                        <span className="project-date"><a href={post_attach && "//" + window.location.hostname + ":8081" + post_attach.path} target="_blank">이 프로젝트 다운로드</a></span>
                    </div>
                </div>
                
                {post && post.contents.map((content, i) => <Section content={content} key={i} index={i}/>)}

                <div className="row project-content">
                    <div className="col-sm-12">
                        <div className="project-opinion">
                            <h3><FontAwesomeIcon icon={faCommentDots} /> my opinion</h3>
                            <span className="project-opinion-contents" style={{"whiteSpace": "pre-line"}}>
                                {post && post.opinion}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row project-content">
                    <div className="col-sm-12 float-right">
                        <button type="button" className="btn btn-danger btn-delete-post">삭제</button>
                    </div>
                </div>
            </div>
            <Comment comment={comment} comment_image={comment_image} user_image={user_image}/>
            <Footer />
        </>
    );
}

const Section = (prop) => {
    return (
        <div className="row project-content">
            <div className="col-sm-8">
                <div className="project-section">
                    <div className="project-section-title">
                        <h5><FontAwesomeIcon icon={faAngleRight} /> Section {prop.index + 1}</h5>
                    </div>
                    <div className="project-section-image">
                        <div className="row">
                            <div className="col-sm-12">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="project-section-info" style={{"whiteSpace": "pre-line"}}>
                    {prop.content.section_content}
                </div>
            </div>
        </div>
    );
}

export default Post;