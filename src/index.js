import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData = [
    {message: 'Hi, how are you?', likeCount:15},
    {message: 'It`s my first post?', likeCount:20},
    {message: 'It`s my second post?', likeCount:84},
    {message: 'It`s my third post?', likeCount:56}
];
let dialogData = [
    {id:1, name:"Vika"},
    {id:2, name:"Vika2"},
    {id:3, name:"Vika3"},
    {id:4, name:"Vika4"}
]
let messagesData = [
    {id:1, message:"HI"},
    {id:2, message:"How are you"},
    {id:3, message:"Yo"},
    {id:4, message:"Yo"}
]
let profileInfo = [
    {infoTitle: ' About Me:', infoDescription: ' Hi, I’m James, I’m 36 and I work as a Digital Designer for the “Daydreams” Agency in Pier 56.'},
    {infoTitle:' Favourite TV Shows:', infoDescription:' Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.'},
    {infoTitle:' Favourite Music Bands / Artists:', infoDescription:'Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.'}
];
ReactDOM.render(<App postData={postData} dialogData={dialogData} messagesData={messagesData} profileInfo={profileInfo}/>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
