import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {


    let dialogElements = props.dialogData.map( dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>);



    let messagesElements = props.messagesData.map(messages =>
        <Message message={messages.message} id={messages.id}/>
    )

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;