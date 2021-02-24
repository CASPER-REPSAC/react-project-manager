const express = require("express");
const sendQuery = require("../feature/db");
const router = express.Router();
const check = require("../feature/check");

router.get("/post/:idx", async (req, res) => {
    const post_idx = req.params.idx;
    let user_image = '';

    // 게시글 존재 여부 확인
    const post_row = await sendQuery(`SELECT * FROM post WHERE post_idx=?`, [post_idx]);
    if(post_row.length == 0){
        res.json({"result" : "error", "message" : "해당 글이 존재하지 않습니다."});
        return;
    }

    if(check.isLogin(req.session.passport)){
        const user_row = await sendQuery(`SELECT user_image FROM user WHERE user_id = ?`, [req.session.passport.user.id]);
        user_image = user_row[0].user_image;
    }

    const post_attach = await sendQuery(`SELECT path FROM post_attach WHERE post_idx = ?`, [post_idx]);
    const [comment, comment_image] = await getCommentAndReply(post_idx);

    // res.render("post", {
    //     require: data, 
    //     post_data : post_row[0], 
    //     post_attach : post_attach[0], 
    //     user_info : user_info,
    //     comment_data : comment,
    //     comment_image : user_image,
    //     user_auth : user_auth
    // });

    res.json({
        "result" : "success", 
        "post" : post_row[0],
        "post_attach" : post_attach[0],
        "comment" : comment,
        "comment_image" : comment_image,
        "user_image" : user_image
    })
})

async function getCommentAndReply(post_idx){
    let post_comment = await sendQuery(`SELECT * FROM post_comment WHERE post_idx = ?`, [post_idx]);
    const user_image = {};
    let user_list = [];

    // 각 댓글의 답글을 조회
    for(let i = 0; i < post_comment.length; i++){
        let reply_comment = await sendQuery(`SELECT * FROM comment_reply WHERE comment_idx = ?`, [post_comment[i].comment_idx]);
        post_comment[i].reply_comment = reply_comment;

        user_list.push(post_comment[i].user_id);

        for(let j=0; j<reply_comment.length; j++)
            user_list.push(reply_comment[j].user_id);
    }

    user_list = Array.from(new Set(user_list));
    for(let i = 0; i < user_list.length; i++){
        let tmp = await sendQuery(`SELECT user_image FROM user WHERE user_id = ?`, [user_list[i]]);
        user_image[user_list[i]] = tmp[0].user_image;
    }

    return [post_comment, user_image];
}

module.exports = router;