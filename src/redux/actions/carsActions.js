export const getCars = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirestore();
    firestore.collection("cars").get();

    dispatch({
      type: GET_CARS,
    });
  };
};
