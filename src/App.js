import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Photo from "./components/Photo/Photo";
import Friends from "./components/Friends/Friends";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import HeaderPhoto from "./components/HeaderPhoto/HeaderPhoto";
import Avatar from "./components/Avatar/Avatar";
import ProfileLeft from "./components/Profile/ProfileLeft/ProfileLeft";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {

    return (
            <div className='app-wrapper'>
                <Header/>
                <div className="profile-wrapper">
                    <HeaderPhoto/>
                    <Avatar/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/profile' render = { () => <Profile/>}/>
                        <Route path='/photo' render = { () => <Photo/>}/>
                        <Route path='/dialogs' render = { () => <DialogsContainer/>}/>
                        <Route path='/friends' render = { () => <Friends/>}/>
                        <Route path='/music' render = { () => <Music/>}/>
                        <Route path='/settings' render = { () => <Settings/>}/>
                    </div>
                </div>

            </div>
    );
}

export default App;
