const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "CURRENT_USER":
      return action.payload;
    default:
      return state;
  }
};
