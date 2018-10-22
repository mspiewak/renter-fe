import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";

export class Payments extends Component {
  render() {
    return (
      <div>
        <h3 className="alert alert-success">Wpłaty</h3>
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
                <td key={row.id + "_amount"}>{row.amount} zł.</td>
                <td key={row.id + "_payment_date"}>
                  {new Date(row.payment_date).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  data: state.payments
});

const PaymentsContainer = connect(mapStateToProps)(Payments);

export default PaymentsContainer;
