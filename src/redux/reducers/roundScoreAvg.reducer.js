const roundAvg = (state = [], action) => {
    switch (action.type) {
      case "SET_AVG":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default roundAvg;
  