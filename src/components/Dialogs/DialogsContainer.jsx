import React from "react";
import {addMessageActionCreator, changeTextMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState();

    let changeTextMessage = (textMessage) => {
         props.store.dispatch(changeTextMessageActionCreator(textMessage));   //ф-ция, которая сидит в store.js
    }
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());   //ф-ция, которая сидит в store.js
    }
    return (
        <Dialogs addMessage={addMessage}
                 changeTextMessageActionCreator={changeTextMessage}
                 textMessage={state.dialogPage.textMessage}
                 dialogData={state.dialogPage.dialogData}
                 messagesData={state.dialogPage.messagesData}/>
    )
}

export default DialogsContainer;