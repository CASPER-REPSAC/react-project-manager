import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faReply } from "@fortawesome/free-solid-svg-icons";

import {IsLogin} from '../../feature/Check';
import './comment.css';

const Comment = (props) => {
    const [is_login, setIsLogin] = useState(false);

    useEffect(async () => {
        const result = await IsLogin();
        setIsLogin(result);
    }, [])

    console.log(props);
    return (
        <div className="container contents-box">
            <div className="row">
                <div className="col-sm-12">
                    <div className="comments">
                        <h4><FontAwesomeIcon icon={faComments} /> Comments (0)</h4>
                    </div>
                </div>
            </div>
            {props.comment.map((comment, key) => <CommentBuild comment={comment} comment_image={props.comment_image} key={key}/>)}
            {is_login === true ? <InputCommentBuild user_image={props.user_image}/> : <></>}
        </div>
    );
}

const CommentBuild = (prop) => {
    return (
        <div className="row">
            <div className="col-sm-1">
                <div className="comment-writer-image">
                    <img src={prop.comment_image[prop.comment.user_id]} />
                </div>
            </div>
            <div className="col-sm-11">
                <div className="comment-info">
                    <span className="comment-writer">
                        {prop.comment.writer}
                    </span>
                    <span className="comment-date">
                        {prop.comment.comment_date}
                    </span>
                    <div className="comment-content" style={{"whiteSpace": "pre-line"}}>
                        {prop.comment.comment_content}
                    </div>
                </div>
                
                <div className="comment-reply">
                    <input type="hidden" name="comment-idx" value="" />
                    <FontAwesomeIcon icon={faReply}/> 답글 달기
                </div>
                
                {prop.comment.reply_comment.map((reply, key) => <ReplyBuild reply={reply} comment_image={prop.comment_image} key={key}/>)}
            </div>
        </div>
    );
}

const ReplyBuild = (prop) => {
    return (
        <div className="row">
            <div className="col-sm-1">
                <div className="comment-writer-image">
                    <img src={prop.comment_image[prop.reply.user_id]} />
                </div>
            </div>
            <div className="col-sm-11">
                <div className="comment-info">
                    <span className="comment-writer">
                        {prop.reply.reply_comment}
                    </span>
                    <span className="comment-date">
                        {prop.reply.reply_date}
                    </span>
                    <div className="comment-content" style={{"whiteSpace": "pre-line"}}>
                        {prop.reply.reply_content}
                    </div>
                </div>
            </div>
        </div>
    );
}

const InputCommentBuild = (prop) => {
    return (
        <div className="input-comment-box row">
            <div className="col-sm-1">
                <div className="comment-writer-image">
                    <img src={prop.user_image} />
                </div>
            </div>
            <div className="col-sm-10">
                <textarea className="write-form-textarea input-comment-content" placeholder="댓글을 적어주세요."></textarea>
            </div>
            <div className="col-sm-1">
                <button type="button" className="btn btn-success btn-comment">Submit</button>
            </div>
        </div>
    );
}

export default Comment;