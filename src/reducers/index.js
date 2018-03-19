import { GET_BILLS_PER_TENANT } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case GET_BILLS_PER_TENANT:
      return action.payload;
    default:
      return state;
  }
}
