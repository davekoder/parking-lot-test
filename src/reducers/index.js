import { combineReducers } from "redux";
import { parkingReducer } from "./parkingReducer";

const rootReducer = combineReducers({
  parking: parkingReducer,
});

export default rootReducer;
