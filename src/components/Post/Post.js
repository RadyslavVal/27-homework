import React, { useState } from 'react';
import './Post.css'
import likePng from './image/like.png';
import commentPng from './image/comment.png';
import repostPng from './image/repost.png';
import addLikePng from './image/addLike.png';
import addCommentPng from './image/addComment.png';
import addRepostPng from './image/addRepost.png';


const Post = ({ data }) => {
    const { author, content, image, date, postInfo, id } = data;
    const { name, avatar, nickname } = author;
    const { likes, comments, reposts } = postInfo;

    let [like, setLike] = useState(false)
    let [comment, setComment] = useState(false)
    let [repost, setRepost] = useState(false)

    function clickLike(e) {
        let div = e.target.closest('div');
        setLike(like = !like);
        let likeImg = div.childNodes[0];
        like ? likeImg.src = addLikePng : likeImg.src = likePng;
        like ? div.childNodes[1].textContent++ : div.childNodes[1].textContent--;
    };

    function clickComment(e) {
        let div = e.target.closest('div');
        setComment(comment = !comment);
        let commentImg = div.childNodes[0];
        comment ? commentImg.src = addCommentPng : commentImg.src = commentPng;
        comment ? div.childNodes[1].textContent++ : div.childNodes[1].textContent--;
    };

    function clickRepost(e) {
        let div = e.target.closest('div');
        setRepost(repost = !repost);
        let reportImg = div.childNodes[0];
        repost ? reportImg.src = addRepostPng : reportImg.src = repostPng;
        repost ? div.childNodes[1].textContent++ : div.childNodes[1].textContent--;
    };

    return (
        <div className="post" id={id}>
            <div className="post-card">
                <div className="post-header">
                    <div className="title-avatar">
                        <img src={avatar} alt="Avatar" />
                    </div>
                    <div className='post-content'>
                        <div className="post-title">
                            <div className="author-info">
                                <div className="author-nameSername">{name}</div>
                                <div className="author-nickname">{nickname}</div>
                            </div>
                            <div className="post-date">{date}</div>
                        </div>
                        <div className="post-text">{content}</div>
                    </div>
                </div>
                <div className="post-image">
                    <img src={image} alt="ContentImage" />
                </div>
                <div className='post-footer'>
                    <div className="footer-element" onClick={clickLike}>
                        <img src={likePng} alt='like' className='footer-image' />
                        <span >{likes}</span>
                    </div>
                    <div className="footer-element" onClick={clickComment}>
                        <img id='comment' src={commentPng} alt='comment' className='footer-image' />
                        <span >{comments}</span>
                    </div>
                    <div className="footer-element" onClick={clickRepost}>
                        <img id='repost' src={repostPng} alt='repost' className='footer-image' />
                        <span > {reposts} </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;