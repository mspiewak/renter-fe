import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import getBillsPerTenant from "./../actions/actions";
import { Table } from "react-bootstrap";

// App.js
export class Bills extends Component {
  componentDidMount() {
    this.props.getBillsPerTenant(this.props.params.id);
  }

  render() {
    return (
      <Table responsible="true" striped bordered>
        <thead>
          <tr>
            <th>Bill Id</th>
            <th>Tenant Id</th>
            <th>Price</th>
            <th>Payment Date</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map(row => (
            <tr key={row.id}>
              <td key={row.id + "_id"}>{row.bill_id}</td>
              <td key={row.id + "_tenant_id"}>{row.tenant_id}</td>
              <td key={row.id + "_price"}>{row.price}</td>
              <td key={row.id + "_payment_date"}>
                {new Date(row.payment_date).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({
  data: state
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getBillsPerTenant: getBillsPerTenant
    },
    dispatch
  );
}

const BillsContainer = connect(mapStateToProps, mapDispatchToProps)(Bills);

export default BillsContainer;
