// Initial state retrieved synchronously from localStorage
let initialState = JSON.parse(localStorage.getItem("instructor")) || "";



// Redux reducer function
export const Instructor = (state = initialState, action) => {
    switch (action.type) {
        case "INSTRUCTOR": {
            // Update local storage with the payload
            localStorage.setItem("instructor", JSON.stringify(action.payload));
            // Update Redux state
            return action.payload;
        }
        default:
            // Return current state by default
            return state;
    }
};
