const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE = 'CHANGE-MESSAGE';
let InitialState = {
    dialogData : [
        {id:1, name:"Vika"},
        {id:2, name:"Vika2"},
        {id:3, name:"Vika3"},
        {id:4, name:"Vika4"}
    ],
    textMessage: '',
    messagesData : [
        {id:1, message:"HI"},
        {id:2, message:"How are you"},
        {id:3, message:"Yo"},
        {id:4, message:"Yo"}
    ]
}
const dialogsReducer = (state = InitialState, action) => {
    switch(action.type){
        case ADD_MESSAGE:
            let newMessage = {
                message: state.textMessage,
                id: 5
            };
            state.messagesData.push(newMessage);
            state.textMessage = "";
        return state;
        case CHANGE_MESSAGE:
            state.textMessage = action.textMessage;
        return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = (textMessage) => {
    return{
        type: ADD_MESSAGE, textMessage : textMessage
    }
}
export const changeTextMessageActionCreator = (textMessage) => {

    return{
        type: CHANGE_MESSAGE, textMessage: textMessage
    }
}
export default dialogsReducer;