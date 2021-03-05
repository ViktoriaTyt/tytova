const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE = 'CHANGE-MESSAGE';

let store = {
    _state: {
        profilePage: {
            postData : [
                {id:1, message: 'Hi, how are you?', likeCount:15},
                {id:2, message: 'It`s my first post?', likeCount:20},
                {id:3, message: 'It`s my second post?', likeCount:84},
                {id:4, message: 'It`s my third post?', likeCount:56}
            ],
            newPostText: 'some-text',
            profileInfo : [
                {infoTitle: ' About Me:', infoDescription: ' Hi, I’m James, I’m 36 and I work as a Digital Designer for the “Daydreams” Agency in Pier 56.'},
                {infoTitle:' Favourite TV Shows:', infoDescription:' Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.'},
                {infoTitle:' Favourite Music Bands / Artists:', infoDescription:'Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.'}
            ]
        },
        dialogPage: {
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
        },
        friendsPage: {
            infoFriend : [
                {name: "Nicholas Grissom", country: "San Francisco, CA", numberFriends: 52, photos: 240, videos: 16},
                {name: "Marina Valentine", country: "Long Island, NY", numberFriends: 52, photos: 240, videos: 16},
                {name: "Nicholas Grissom", country: "San Francisco, CA", numberFriends: 49, photos: 20, videos: 1},
                {name: "Chris Greyson", country: "Austin, TX", numberFriends: 544, photos: 25, videos: 895},
                {name: "Elaine Dreifuss", country: "SNew York, NY", numberFriends: 41, photos: 544, videos: 23},
                {name: "Bruce Peterson", country: "Austin, TX", numberFriends: 114, photos: 133, videos: 41},
                {name: "Carol Summers", country: "Los Angeles, CA", numberFriends: 40, photos: 132, videos: 5},
                {name: "Michael Maximoff", country: "Portland, OR", numberFriends: 58, photos: 304, videos: 19}
            ]
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber () {

    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },
    updateNewPostText (newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    updateMessageText (textMessage){
        this._state.dialogPage.textMessage = textMessage;
        this._callSubscriber();
    },
    addPost(){
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.postData.push(newPost);
        this.updateNewPostText('');
        this._callSubscriber();

    },
    addMessage(){
        debugger
        let newMessage = {
            message: this._state.dialogPage.textMessage,
            id: 5
        };
        this._state.dialogPage.messagesData.push(newMessage);
        this.updateMessageText('');
        this._callSubscriber();

    },
    changeTextMessage(textMessage){
        this._state.dialogPage.textMessage = textMessage;
        this._callSubscriber();
    },
    dispatch(action){
        if(action.type === ADD_POST){
            this.addPost()
        }else if(action.type === UPDATE_NEW_POST_TEXT){
            this.updateNewPostText(action.newText)
        }else if(action.type === ADD_MESSAGE){
            this.addMessage(action.textMessage)
        }else if(action.type === CHANGE_MESSAGE){
            this.changeTextMessage(action.textMessage)
        }
    }
}

export const addPostActionCreator = (text) => {

    return{
        type: ADD_POST, text: text
    }
}
export const onPostChangeActionCreator = (text) => {
    return{
        type: UPDATE_NEW_POST_TEXT, newText : text
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

window.store = store;

export default store;