

export const setUpUser=(userData)=>{
    return{
        type: "SETUPUSER",
        payload: userData
    }
}