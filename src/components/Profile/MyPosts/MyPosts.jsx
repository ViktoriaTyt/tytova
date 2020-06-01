import React from 'react';
import classes from "./MyPosts.module.css";
import Post from './Post'

function MyPosts(props) {

    let postItem = props.postData.map( postMessage =>
        <Post message={postMessage.message} likeCount={postMessage.likeCount}    />
    )
    return(
        <div className={classes.postWrapper}>
            <div className="wrapperContent">
                My post
                <div>
                   <textarea></textarea>
                    <button className={classes.add}>Add post</button>
                    <button className={classes.remove}>Cancel</button>
                </div>

            </div>
            <div className={classes.posts}>
                {postItem}
            </div>
        </div>
    )
}
export default MyPosts;