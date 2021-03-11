 import React from 'react';
 import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
 import MyPosts from "./MyPosts";
 import StoreContext from "../../../StoreContext";

function MyPostsContainer() {

    return(
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator() );   //ф-ция, которая сидит в store.js

                };
                let onPostOnchange = (text) => {
                    let actionOnPost = onPostChangeActionCreator(text);
                    store.dispatch(actionOnPost);   //ф-ция, которая сидит в store.js

                }
                return <MyPosts onPostChangeActionCreator={onPostOnchange}
                     addPost={addPost}
                     posts={state.profilePage.postData}
                     newPostText={state.profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer;