const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let InitialState = {
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
};
const profileReducer = (state = InitialState, action) => {
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            state.postData.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
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

export default profileReducer;