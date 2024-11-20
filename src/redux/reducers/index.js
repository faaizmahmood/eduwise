import { combineReducers } from "redux";
import { set_up_user } from "./set_up_user";
import {handle_search_input} from './SerachInput' 

const rootReducer = combineReducers({
    set_up_user,
    handle_search_input,
});

export default rootReducer;