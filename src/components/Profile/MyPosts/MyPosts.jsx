import React from 'react';
import classes from "./MyPosts.module.css";
import Post from './Post'

function MyPosts(props) {

    let postItem = props.posts.map( postMessage =>
        <Post message={postMessage.message}
              likeCount={postMessage.likeCount}
              id={postMessage.id}   />);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };
    let onPostOnchange = () => {
        let text = newPostElement.current.value;
        props.onPostChangeActionCreator(text);

    }
    return(
        <div className={classes.postWrapper}>
            <div className="wrapperContent">
                My post
                <div>
                   <textarea ref={newPostElement} onChange={onPostOnchange} value={props.newPostText} />
                    <button className={classes.add} onClick={ onAddPost }>Add post</button>
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