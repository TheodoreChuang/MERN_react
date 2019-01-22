import LocalApi from "./../apis/local";

export const setAuthToken = (token) => {
    localStorage.setItem("token", token);

    return {
        type: "AUTH_TOKEN",
        payload: token
    };
}

export const removeAuthToken = () => {
    localStorage.clear();

    return {
        type: "REMOVE_TOKEN",
        payload: null
    };
}

export const fetchChallenges = async () => {
    response = await LocalApi.get("/");

    dispatch({
        type: "CHALLENGES_LIST",
        payload: response.data
    });
}