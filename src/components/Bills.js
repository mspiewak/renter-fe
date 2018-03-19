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
            <th>Bill Type</th>
            <th>Price</th>
            <th>Price Total</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Payment Date</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map(row => (
            <tr key={row.id}>
              <td key={row.id + "_type"}>{row.bill.type.name}</td>
              <td key={row.id + "_price"}>{row.price}</td>
              <td key={row.id + "_price_total"}>{row.bill.price}</td>
              <td key={row.id + "_payment_date"}>
                {new Date(row.bill.period_start).toLocaleDateString()}
              </td>
              <td key={row.id + "_payment_date"}>
                {new Date(row.bill.period_end).toLocaleDateString()}
              </td>
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
