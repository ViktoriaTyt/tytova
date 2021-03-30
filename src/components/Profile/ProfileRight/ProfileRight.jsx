import React from 'react';
import classes from "./ProfileRight.module.css";
import StoreContext from "../../../StoreContext";

const ProfileText = (props) => {
    return <div className="contentInfo">
        <p className="mainText">
            {props.infoTitle}
        </p>
        <p className="textInfo">
            {props.infoDescription}
        </p>
    </div>
}

function ProfileRight(props) {
    let profileElem = props.profilePage.profileInfo.map(info =>
        <ProfileText infoTitle={info.infoTitle} infoDescription={info.infoDescription}/>
    );
    return <div className="profileInfo">
        <div className="wrapperInfo">
            <h6 className="titleInfo">
                Profile Intro
            </h6>
            {profileElem}
        </div>
    </div>

}

export default ProfileRight;