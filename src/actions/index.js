import LocalApi from "./../apis/local";

// auth, callback added to redirect to homepage
export const setAuthToken = (token, cb) => {
  localStorage.setItem("token", token);
  cb();

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