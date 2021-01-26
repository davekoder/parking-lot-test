export const parkingReducer = (state = null, action) => {
  switch (action.type) {
    case "TOTAL_PARKING_LOT":
      return action.payload;
    case "CAR_DETAILS":
      return action.payload;

    default:
      return state;
  }
};
