import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileLeft from "./ProfileLeft/ProfileLeft";
import ProfileRight from "./ProfileRight/ProfileRight";

function Profile(props) {

    return (
        <div className={classes.profileWrapper}>
            <div className={classes.info}>
                <ProfileLeft profileInfo={props.profilePage.profileInfo}/>
                <ProfileLeft profileInfo={props.profilePage.profileInfo}/>
            </div>
            <div className={classes.mainProfile}>
                <ProfileInfo/>
                <MyPosts postData={props.profilePage.postData}
                         newPostText={props.profilePage.newPostText}
                         dispatch={props.dispatch}/>
            </div>
            <div className={classes.anotherInfo}>
                <ProfileRight profileInfo={props.profilePage.profileInfo}/>
            </div>
        </div>
    )
}

export default Profile;