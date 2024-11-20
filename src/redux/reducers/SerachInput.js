
const initialState = ""

export const handle_search_input = (state = initialState, action)=>{

    switch(action.type){
        case "HANDLE_INPUT": {
            return action.payload
        }
        
        default: return state
    }

}