import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NearMeIcon from '@material-ui/icons/NearMe';

function get_url_extension( url ) {
    return url.split(/[#?]/)[0].split('.').pop().trim();
}
function Post({ profilePic, image, username, timestamp, message }) {
    const fileExtension = get_url_extension(image);

    return (
        <div className='post'>
            <div class="post__top">
                <Avatar src={profilePic} className='post__avatar' />
                <div class="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div class="post__bottom">
                <p>{message}</p>
            </div>

            {fileExtension === 'mp4' ? (
                <video src={image} alt="" controls width={800} />
            ) : (
                <div className="post__image">
                <img src={image} alt="" />
                </div>
            )}

            <div class="post__options">
                <div class="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div class="post__option">
                    <ChatBubbleOutlineOutlinedIcon />
                    <p>Comment</p>
                </div>
                <div class="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Post
