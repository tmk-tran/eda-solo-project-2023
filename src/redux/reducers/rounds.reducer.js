const roundReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_ROUNDS":
      return action.payload;
    default:
      return state;
  }
};

export default roundReducer;

// const roundReducer = (state = { rounds: [], roundId: [] }, action) => {
//   switch (action.type) {
//     case "SET_ROUNDS":
//       return { ...state, rounds: action.payload };
//     case "SET_ROUND_ID":
//       return { ...state, roundId: action.roundId };
//     default:
//       return state;
//   }
// };

// export default roundReducer;
