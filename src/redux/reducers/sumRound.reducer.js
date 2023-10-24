const sumRound = (state = [], action) => {
  switch (action.type) {
    case "SET_ROUND_TOTAL":
      return action.payload;
    default:
      return state;
  }
};

export default sumRound;
