import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Photo from "./components/Photo/Photo";
import Dialogs from "./components/Dialogs/Dialogs";
import Friends from "./components/Friends/Friends";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import HeaderPhoto from "./components/HeaderPhoto/HeaderPhoto";
import Avatar from "./components/Avatar/Avatar";
import ProfileLeft from "./components/Profile/ProfileLeft/ProfileLeft";

function App(props) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <div className="profile-wrapper">
                    <HeaderPhoto/>
                    <Avatar/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/profile' render = { () => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                        <Route path='/photo' render = { () => <Photo/>}/>
                        <Route path='/dialogs' render = { () => <Dialogs store={props.store}/>}/>
                        <Route path='/friends' render = { () => <Friends state={props.state.friendsPage}/>}/>
                        <Route path='/music' render = { () => <Music/>}/>
                        <Route path='/settings' render = { () => <Settings/>}/>
                    </div>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
