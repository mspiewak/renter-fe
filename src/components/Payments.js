import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPaymentsPerTenant } from "./../actions/actions";
import { Table } from "react-bootstrap";

// App.js
export class Payments extends Component {
  componentDidMount() {
    this.props.getPaymentsPerTenant(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.id !== this.props.match.params.id) {
      this.props.getPaymentsPerTenant(newProps.match.params.id);
    }
  }

  render() {
    return (
      <Table responsible="true" striped bordered>
        <thead>
          <tr>
            <th>Wartość</th>
            <th>Data wpłaty</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map(row => (
            <tr key={row.id}>
              <td key={row.id + "_amount"}>{row.amount}</td>
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

const mapStateToProps = (state, ownProps) => ({
  data: state
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getPaymentsPerTenant: getPaymentsPerTenant
    },
    dispatch
  );
}

const PaymentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Payments);

export default PaymentsContainer;
