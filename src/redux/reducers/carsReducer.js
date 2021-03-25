import { GET_CARS } from "../actionTypes";

const intialState = {
  cars: [
    {
      name: "Gibberish",
      model: "V3",
      year: "2020",
      image: "https://wallpapercave.com/wp/NGzwTao.jpg",
    },
  ],
};

const carsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case GET_CARS:
      return state;

    default:
      break;
  }
  return state;
};

export default carsReducer;
