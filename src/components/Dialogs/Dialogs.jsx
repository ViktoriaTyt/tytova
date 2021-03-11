import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import classes from "../Profile/MyPosts/MyPosts.module.css";


const Dialogs = (props) => {

    //let state = props.store.getState().dialogPage;
    let dialogElements = props.dialogData.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>);


    let messagesElements = props.messagesData.map(messages =>
        <Message message={messages.message} id={messages.id}/>);
    let newMessage = React.createRef();

    let changeTextMessage = (e) => {
        let textMessage = e.target.value;
         props.changeTextMessageActionCreator(textMessage);   //ф-ция, которая сидит в store.js
    }
    let addMessage = () => {
        props.addMessage();
    }
    return (
        <div>
            <div className={s.wrapperArea}>
                <p className={s.text}>Ответить на сообщение</p>
                <textarea ref={newMessage} onChange={changeTextMessage} value={props.textMessage}
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