const totalRounds = (state = [], action) => {
  switch (action.type) {
    case "SET_TOTAL_ROUNDS":
      return action.payload;
    default:
      return state;
  }
};

export default totalRounds;
