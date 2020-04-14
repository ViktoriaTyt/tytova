import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return(
        <div>
            <img src='https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'/>
            <div>
                ava + description
            </div>
           <MyPosts/>
        </div>
    )
}
export default Profile;