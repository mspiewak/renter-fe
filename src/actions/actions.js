import {
  GET_BILLS_PER_TENANT,
  GET_PAYMENTS_PER_TENANT,
  POST_BILL
} from "./types";
import axios from "axios";

export function getBillsPerTenant(id) {
  return dispatch => {
    axios
      .get(
        "http://ec2-13-58-70-152.us-east-2.compute.amazonaws.com:8090/tenant/" +
          id +
          "/bill"
      )
      .then(res => {
        if (res.status === 200) {
          dispatch(getBillsPerTenantAsync(res.data));
        }
      });
  };
}

export function getPaymentsPerTenant(id) {
  return dispatch => {
    axios
      .get(
        "http://ec2-13-58-70-152.us-east-2.compute.amazonaws.com:8090/tenant/" +
          id +
          "/payment"
      )
      .then(res => {
        if (res.status === 200) {
          dispatch(getPaymentsPerTenantAsync(res.data));
        }
      });
  };
}

export function postBill(data) {
  return dispatch => {
    axios
      .post(
        "http://ec2-13-58-70-152.us-east-2.compute.amazonaws.com:8090/bill",
        data
      )
      .then(res => {
        if (res.status === 200) {
          dispatch(postBillsAsync(res.data));
        }
      });
  };
}

function getBillsPerTenantAsync(bills) {
  return {
    type: GET_BILLS_PER_TENANT,
    payload: bills
  };
}

function getPaymentsPerTenantAsync(payments) {
  return {
    type: GET_PAYMENTS_PER_TENANT,
    payload: payments
  };
}

function postBillsAsync(bill) {
  return {
    type: POST_BILL,
    payload: bill
  };
}

export function getFormattedDate(date) {
  var dd = date.getDate();

  var mm = date.getMonth() + 1;
  var yyyy = date.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  return yyyy + "-" + mm + "-" + dd;
}
