import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";

export class Bills extends Component {
  render() {
    return (
      <div>
        <h3 className="alert alert-primary">Rachunki</h3>
        <Table responsible="true" striped bordered>
          <thead>
            <tr>
              <th>Typ</th>
              <th>Okres</th>
              <th>Kwota do zapłaty</th>
              <th>Termin płatności</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map(row => (
              <tr key={row.id}>
                <td key={row.id + "_type"}>
                  <a href={row.bill.url} target="blank">
                    {row.bill.type.name}
                  </a>
                </td>
                <td key={row.id + "_period_start"}>
                  {new Date(row.bill.period_start).toLocaleDateString()} -{" "}
                  {new Date(row.bill.period_end).toLocaleDateString()}
                </td>
                <td key={row.id + "_price"}>{row.price} zł.</td>
                <td key={row.id + "_due_date"}>
                  {new Date(row.bill.due_date).toLocaleDateString()}
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
  data: state.bills
});

const BillsContainer = connect(mapStateToProps)(Bills);

export default BillsContainer;
