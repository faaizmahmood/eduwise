import { combineReducers } from "redux";
import { set_up_user } from "./set_up_user";
import {handle_search_input} from './SerachInput' 
import { user_mode } from "./switchMode";

const rootReducer = combineReducers({
    set_up_user,
    handle_search_input,
    user_mode
});

export default rootReducer;