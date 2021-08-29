const initialState = [];

export default function managementReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_MANAGEMENT":
      return action.payload;
      break;

    case "ADD":
      return [...state, action.payload];
      break;

    default:
      return state;
      break;
  }
}
