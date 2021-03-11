import React from "react";
import {addMessageActionCreator, changeTextMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let changeTextMessage = (textMessage) => {
                    store.dispatch(changeTextMessageActionCreator(textMessage));   //ф-ция, которая сидит в store.js
                }
                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());   //ф-ция, которая сидит в store.js
                }
                return <Dialogs addMessage={addMessage}
                                changeTextMessageActionCreator={changeTextMessage}
                                textMessage={state.dialogPage.textMessage}
                                dialogData={state.dialogPage.dialogData}
                                messagesData={state.dialogPage.messagesData}/>

            }
        }</StoreContext.Consumer>
    )
}

export default DialogsContainer;