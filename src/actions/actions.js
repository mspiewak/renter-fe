import { GET_BILLS_PER_TENANT } from "./types";
import axios from "axios";

export default function getBillsPerTenant(id) {
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

function getBillsPerTenantAsync(bills) {
  return {
    type: GET_BILLS_PER_TENANT,
    payload: bills
  };
}
