import React from 'react';
import classes from "./MyPosts.module.css";
import Post from './Post'

function MyPosts() {
    return(
        <div>
            <div>
                My post
                <div>
                   <textarea></textarea>
                    <button>Add post</button>
                </div>

            </div>
            <div className={classes.posts}>
                <Post message='Hi, how are you? ' likeCount="15"    />
                <Post message='It`s my first post? ' likeCount="20" />
            </div>
        </div>
    )
}
export default MyPosts;