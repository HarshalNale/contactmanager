import { combineReducers } from "redux";
import ContactReducer from "./ContactReducer";

const RootReducer = combineReducers({
  contactReducer: ContactReducer,
});

export default RootReducer;
