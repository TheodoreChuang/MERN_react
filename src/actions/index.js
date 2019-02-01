import LocalApi from "./../apis/local";

// auth
export const setAuthToken = token => {
  localStorage.setItem("token", token);

  return {
    type: "AUTH_TOKEN",
    payload: token
  };
};

export const removeAuthToken = () => {
  localStorage.clear();

  return {
    type: "REMOVE_TOKEN",
    payload: null
  };
};

// current user profile
export const getCurrentUser = () => {
  return async (dispatch, getState) => {
    const response = await LocalApi.get("/profile");

    dispatch({
      type: "CURRENT_USER",
      payload: response.data
    });
  };
};

// update user profile
export const updateCurrentUser = (formValues) => {
  return async (dispatch, getState) => {
    const response = await LocalApi.patch("/profile", formValues);

    dispatch({
      type: "UPDATE_USER",
      payload: response.data
    });
  };
};

// challenges
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
};

export const addSubmission = (cbOne, fd, id , cbTwo) => {
    return async (dispatch, getState) => {
        cbOne();
        const response = await LocalApi.post(`/challenges/${id}/submissions`, fd)
        cbTwo();

    dispatch({
      type: "SUBMISSIONS_LIST",
      payload: response.data
    });
  };
};

export const deleteChallenge = () => {
    return async (dispatch, getState) => {
        const response = await LocalApi.delete("/challenges/submission/:id")

        dispatch({
            type: "CHALLENGE_LIST",
            payload: response.data
        })
    }
}
