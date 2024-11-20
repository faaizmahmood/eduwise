

const initialState = JSON.parse(localStorage.getItem('currentUser')) || {};

export const set_up_user = (state = initialState, action)=>{

    switch(action.type){
        case "SETUPUSER": {
            const updatedUser = action.payload;
            localStorage.setItem('currentUser', JSON.stringify(updatedUser));
            return {...state, ...updatedUser}
        }
        
        default: return state
    }

}