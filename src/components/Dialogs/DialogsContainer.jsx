import React from "react";
import {addMessageActionCreator, changeTextMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps =(state) => {
    return {
        textMessage: state.dialogPage.textMessage,
        dialogData: state.dialogPage.dialogData,
        messagesData: state.dialogPage.messagesData
    }
}
let mapDispatchToProps =(dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        changeTextMessageActionCreator: (textMessage) => {
            dispatch(changeTextMessageActionCreator(textMessage));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;