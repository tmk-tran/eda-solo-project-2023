const bestRound = (state = [], action) => {
  switch (action.type) {
    case "SET_BEST_ROUND":
      return action.payload;
    default:
      return state;
  }
};

export default bestRound;
