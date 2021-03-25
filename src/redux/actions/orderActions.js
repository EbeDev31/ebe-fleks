import { ADD_ORDER } from "../actionTypes";

export const addOrder = (order) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const userId = getState().firebase.auth.uid;

    firestore
      .collection("order")
      .add({
        ...order,
        userId: userId,
      })
      .then(() => {
        dispatch({
          type: ADD_ORDER,
          order,
        });
      })
      .catch((err) => {
        dispatch({
          type: "ADD_ORDER_ERR",
          err,
        });
      });
  };
};
