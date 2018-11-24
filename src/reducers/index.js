import {
  GET_BILLS_PER_TENANT,
  GET_PAYMENTS_PER_TENANT,
  POST_BILL,
  GET_INCOME
} from "../actions/types";

const initialState = {
  bills: [],
  payments: [],
  income: []
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
    case POST_BILL:
      return Object.assign({}, state, {});
    case GET_INCOME:
      return Object.assign({}, state, {
        income: action.payload
      });
    default:
      return state;
  }
}
