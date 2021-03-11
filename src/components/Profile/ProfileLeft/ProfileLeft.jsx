import React from 'react';
import classes from "./ProfileLeft.module.css";
import StoreContext from "../../../StoreContext";

const ProfileText = (props) => {
    return  <div className="contentInfo">
        <p className="mainText">
            {props.infoTitle}
        </p>
        <p className="textInfo">
            {props.infoDescription}
        </p>
    </div>
}

function ProfileLeft() {

    return(
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let profileElem = state.profilePage.profileInfo.map(info =>
                    <ProfileText infoTitle={info.infoTitle} infoDescription={info.infoDescription}/>
                );
                return  <div className="profileInfo">
                    <div  className="wrapperInfo">
                        <h6  className="titleInfo">
                            Profile Intro
                        </h6>
                        {profileElem}
                    </div>
                </div>
            }}

        </StoreContext.Consumer>
    )
}
export default ProfileLeft;