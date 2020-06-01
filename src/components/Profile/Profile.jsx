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
                <ProfileLeft profileInfo={props.profileInfo}/>
                <ProfileLeft profileInfo={props.profileInfo}/>
            </div>
            <div className={classes.mainProfile}>
                <ProfileInfo/>
                <MyPosts postData={props.postData}/>
            </div>
            <div className={classes.anotherInfo}>
                <ProfileRight profileInfo={props.profileInfo}/>
            </div>
        </div>
    )
}

export default Profile;