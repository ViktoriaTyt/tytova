import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import classes from "../Profile/MyPosts/MyPosts.module.css";
import {addMessageActionCreator, changeTextMessageActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let state = props.store.getState().dialogPage;
    let dialogElements = state.dialogData.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>);


    let messagesElements = state.messagesData.map(messages =>
        <Message message={messages.message} id={messages.id}/>);

    let newMessage = React.createRef();
    let changeTextMessage = (e) => {
        let textMessage = e.target.value;
         props.store.dispatch(changeTextMessageActionCreator(textMessage));   //ф-ция, которая сидит в store.js
        console.log(textMessage)
    }
    let addMessage = () => {
        let textMessage = newMessage.current.value;
        props.store.dispatch(addMessageActionCreator());   //ф-ция, которая сидит в store.js

        console.log(textMessage)
    }
    return (
        <div>
            <div className={s.wrapperArea}>
                <p className={s.text}>Ответить на сообщение</p>
                <textarea ref={newMessage} onChange={changeTextMessage} value={state.textMessage}
                            placeholder="Enter text"/>
                <div>
                    <button className={classes.add} onClick={addMessage}>Отправить</button>
                    <button className={classes.remove}>Отменить</button>
                </div>
            </div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogElements}
                </div>

                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>

        </div>
    )
}

export default Dialogs;