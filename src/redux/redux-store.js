import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {combineReducers} from "redux";

const {createStore} = require("redux");
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sideBar: sidebarReducer
});
let store = createStore(reducers);

export default store;