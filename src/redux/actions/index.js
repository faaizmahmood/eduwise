

export const setUpUser = (userData) => {
    return {
        type: "SETUPUSER",
        payload: userData
    }
}


export const handleSearchInput = (value) => ({
    type: "HANDLE_INPUT",
    payload: value,
});


export const switchMode = (value) => ({
    type: "SWITCH_MODE",
    payload: value,
});