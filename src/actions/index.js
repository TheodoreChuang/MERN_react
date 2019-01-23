import LocalApi from "./../apis/local";

//auth
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

//challenges
export const fetchChallenges = () => {
    return async (dispatch, getState) => {
    const response = await LocalApi.get("/");

        dispatch({
            type: "CHALLENGES_LIST",
            payload: response.data
        });
    };
}

export const addChallenge = (fd) => {
    return async (dispatch, getState) => {
        const response = await LocalApi.post("/challenges/upload", fd)

        dispatch({
            type: "ADD_CHALLENGE",
            payload: response.data
        })
    }
}

//submission
export const fetchSubmissions = () => {
    return async (dispatch, getState) => {
        const response = await LocalApi.get("/");

        dispatch({
            type: "SUBMISSIONS_LIST",
            payload: response.data
        });
    };
}

export const addSubmission = (fd) => {
    return async (dispatch, getState) => {
        const response = await LocalApi.post("/challenges/submission", fd)

        dispatch({
            type: "ADD_SUBMISSION",
            payload: response.data
        })
    }
}

// export const deleteChallenge = () => {
//     return async (dispatch, getState) => {
//         const response = await LocalApi.delete("/challenges/submission/:id")

//         dispatch({
//             type: "DELETE_SUBMISSION",
//             payload: response.data
//         })
//     }
// }