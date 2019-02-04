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
export const updateCurrentUser = formValues => {
  return async (dispatch, getState) => {
    const response = await LocalApi.patch("/profile", formValues);

    dispatch({
      type: "UPDATE_USER",
      payload: response.data
    });
  };
};

// update user profile image
export const updateCurrentUserAvatar = formData => {
  return async (dispatch, getState) => {
    const response = await LocalApi.post("/profile", formData);

    dispatch({
      type: "UPDATE_USER",
      payload: response.data
    });
  };
};
