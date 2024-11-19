

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