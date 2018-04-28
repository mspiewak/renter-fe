import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import getBillsPerTenant from "./../actions/actions";
import { Table } from "react-bootstrap";

// App.js
export class Bills extends Component {
  componentDidMount() {
    this.props.getBillsPerTenant(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.id !== this.props.match.params.id) {
      this.props.getBillsPerTenant(newProps.match.params.id);
    }
  }

  render() {
    return (
      <Table responsible="true" striped bordered>
        <thead>
          <tr>
            <th>Typ</th>
            <th>Okres</th>
            <th>Kwota całk.</th>
            <th>Kwota do zapłaty</th>
            <th>Termin płatności</th>
            <th>Data wpłaty</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map(row => (
            <tr key={row.id}>
              <td key={row.id + "_type"}>{row.bill.type.name}</td>

              <td key={row.id + "_period_start"}>
                {new Date(row.bill.period_start).toLocaleDateString()} -{" "}
                {new Date(row.bill.period_end).toLocaleDateString()}
              </td>
              <td key={row.id + "_price_total"}>{row.bill.total_price}</td>
              <td key={row.id + "_price"}>{row.price}</td>
              <td key={row.id + "_due_date"}>
                {new Date(row.bill.due_date).toLocaleDateString()}
              </td>
              <td
                key={row.id + "_payment_date"}
                className={
                  "alert " +
                  (row.payment_date === null
                    ? "alert-warning"
                    : "alert-success")
                }
              >
                {row.payment_date !== null
                  ? new Date(row.payment_date).toLocaleDateString()
                  : ""}
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
      getBillsPerTenant: getBillsPerTenant
    },
    dispatch
  );
}

const BillsContainer = connect(mapStateToProps, mapDispatchToProps)(Bills);

export default BillsContainer;
