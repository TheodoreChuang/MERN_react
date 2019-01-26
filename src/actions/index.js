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
    const response = await LocalApi.get("/challenges");

        dispatch({
            type: "CHALLENGES_LIST",
            payload: response.data
        });
    };
}

export const addChallenge = (cbOne, formValues, cbTwo) => {
    console.log("inside addchallenge");
    return async (dispatch, getState) => {
        cbOne();
        const response = await LocalApi.post("/challenges/upload", formValues)
        cbTwo();

        dispatch({
            type: "CHALLENGES_LIST",
            payload: response.data
        })
    }
}

//submission
export const fetchSubmissions = () => {
    return async (dispatch, getState) => {
        const response = await LocalApi.get("/submissions");

        dispatch({
            type: "SUBMISSIONS_LIST",
            payload: response.data
        });
    };
}

export const addSubmission = (fd, id) => {
    return async (dispatch, getState) => {
        const response = await LocalApi.post(`/challenges/${id}/submissions`, fd)

        dispatch({
            type: "SUBMISSIONS_LIST",
            payload: response.data
        })
    }
}

export const deleteChallenge = () => {
    return async (dispatch, getState) => {
        const response = await LocalApi.delete("/challenges/submission/:id")

        dispatch({
            type: "CHALLENGE_LIST",
            payload: response.data
        })
    }
}