

const initialState = JSON.parse(localStorage.getItem("user_mode")) || false;

export const user_mode = (state = initialState, action) => {
    switch (action.type) {
        case "SWITCH_MODE": {
            localStorage.setItem("user_mode", JSON.stringify(action.payload));
            return action.payload;
        }
        default:
            return state;
    }
};