const express = require("express");
const router = express.Router();

const sendQuery = require("../feature/db");

router.get("/index", async (req, res) => {
    const post_row = await sendQuery(`SELECT post_idx, writer, title, post_date, type, tag FROM post ORDER BY post_idx DESC`);
    const recent_comment = await sendQuery(`SELECT post_idx, writer, comment_content, comment_date FROM post_comment ORDER BY comment_idx DESC LIMIT 0, 10`);
    const popular_row = await sendQuery(`SELECT * FROM post WHERE like_count >= 1 ORDER BY like_count DESC LIMIT 0, 10`);

    const page_num = (req.query.page) ? (Number(req.query.page) ? Number(req.query.page) : 1) : 1;
    const paging_post_row = await paging(page_num, post_row);

    res.json({
        "post" : paging_post_row,
        "comment" : recent_comment,
        "popular" : popular_row
    });
})

async function paging(page_num, post_row){
    const total_post = post_row.length;     // 총 게시글 수
    const max_post = 5;                    // 한 페이지당 게시글 수
    const max_page_num = 5;                // 보여줄 수 있는 최대 페이지
    const result_page_num = Math.ceil(total_post / max_post);   // 페이징 숫자
    const first_num = Math.ceil(page_num / max_post) + (max_post - 1) * (Math.ceil(page_num / max_post) - 1);
    const end_num = (max_page_num * Math.ceil(page_num / max_post) < result_page_num) ? max_page_num * Math.ceil(page_num / max_post) : result_page_num;

    const paging_post_row = await sendQuery(`SELECT post_idx, writer, title, post_date, type, tag FROM post ORDER BY post_idx DESC LIMIT ${(page_num - 1) * max_post}, ${max_post}`);

    return {
        "data" : paging_post_row,
        "first_num" : first_num,
        "end_num" : end_num,
        "current_page" : page_num,
        "result_page_num" : result_page_num
    }
}

module.exports = router;
