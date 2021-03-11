 import React from 'react';
 import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
 import MyPosts from "./MyPosts";

function MyPostsContainer(props) {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator( ));   //ф-ция, которая сидит в store.js

    };
    let onPostOnchange = (text) => {
        let actionOnPost = onPostChangeActionCreator(text);
        props.store.dispatch(actionOnPost);   //ф-ция, которая сидит в store.js

    }
    return(
        <MyPosts onPostChangeActionCreator={onPostOnchange}
                 addPost={addPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}/>
    )
}
export default MyPostsContainer;