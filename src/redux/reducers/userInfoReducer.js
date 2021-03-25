const intialState = {
  name: "Jon doe",
  bookings: [
    {
      id: 1,
      car: "Volvo",
      duration: "3 days",
    },
    {
      id: 2,
      car: "Audi",
      duration: "2 days",
    },
  ],
};

const userInfoReducer = (state = intialState, { type, payload }) => {
  // switch (type) {
  //     case value:

  //         break;

  //     default:
  //         break;
  // }
  return state;
};

export default userInfoReducer;
