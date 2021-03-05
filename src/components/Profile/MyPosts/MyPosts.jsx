 import React from 'react';
import classes from "./MyPosts.module.css";
import Post from './Post'
 import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/state";



function MyPosts(props) {

    let postItem = props.postData.map( postMessage =>
        <Post message={postMessage.message} likeCount={postMessage.likeCount}  id={postMessage.id}   />);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator(text));   //ф-ция, которая сидит в state.js

    };
    let onPostOnchange = () => {
        let text = newPostElement.current.value;
        let actionOnPost = onPostChangeActionCreator(text);
        props.dispatch(actionOnPost);   //ф-ция, которая сидит в state.js

    }
    return(
        <div className={classes.postWrapper}>
            <div className="wrapperContent">
                My post
                <div>
                   <textarea ref={newPostElement} onChange={onPostOnchange} value={props.newPostText} />
                    <button className={classes.add} onClick={ addPost }>Add post</button>
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