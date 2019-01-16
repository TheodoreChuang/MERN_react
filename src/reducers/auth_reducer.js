const defaultState = {
    token: localStorage.getItem("token") || null
};

export default () => {
    switch(action.type) {
        case "AUTH_TOKEN"
            return {...state, token: action.payload}
        default:    
            return state;
    }
}