import {
  GET_BILLS_PER_TENANT,
  GET_PAYMENTS_PER_TENANT
} from "../actions/types";

const initialState = {
  bills: [],
  payments: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BILLS_PER_TENANT:
      return Object.assign({}, state, {
        bills: action.payload
      });
    case GET_PAYMENTS_PER_TENANT:
      return Object.assign({}, state, {
        payments: action.payload
      });
    default:
      return state;
  }
}
