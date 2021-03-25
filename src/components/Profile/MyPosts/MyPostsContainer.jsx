 import React from 'react';
 import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
 import MyPosts from "./MyPosts";
 import {connect} from "react-redux";

 let mapStateToProps =(state) => {
     return {
         posts: state.profilePage.postData,
         newPostText: state.profilePage.newPostText
     }
 }
 let mapDispatchToProps =(dispatch) => {
     return {
         onPostChangeActionCreator: (text) => {
             let actionOnPost = onPostChangeActionCreator(text);
             dispatch(actionOnPost);   //ф-ция, которая сидит в store.js
         },
         addPost: () => {
             dispatch(addPostActionCreator() );   //ф-ция, которая сидит в store.js
         }
     }
 }
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;