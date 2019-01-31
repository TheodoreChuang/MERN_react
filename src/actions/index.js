import LocalApi from "./../apis/local";

// auth, callback added to redirect to homepage
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
  }
};
