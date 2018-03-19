import { GET_BILLS_PER_TENANT } from "./types";
import axios from "axios";

export default function getBillsPerTenant(id) {
  return dispatch => {
    axios.get("http://localhost:8090/tenant/" + id + "/bill").then(res => {
      dispatch(getBillsPerTenantAsync(res.data));
    });
  };
}

function getBillsPerTenantAsync(bills) {
  return {
    type: GET_BILLS_PER_TENANT,
    payload: bills
  };
}
