const roundReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_ROUNDS":
      return action.payload;
    default:
      return state;
  }
};

export default roundReducer;
