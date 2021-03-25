import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import carsReducer from "../reducers/carsReducer";
import userInfoReducer from "./userInfoReducer";
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  cars: carsReducer,
  userInfo: userInfoReducer,
});

export default rootReducer;
