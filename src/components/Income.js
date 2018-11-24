import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import { getIncome } from "../actions/actions";
import { bindActionCreators } from "redux";

export class Income extends Component {
  componentDidMount() {
    this.props.getIncome();
  }

  render() {
    return (
      <div>
        <h3 className="alert alert-success">Income</h3>
        <Table responsible="true" striped bordered>
          <thead>
            <tr>
              <th>Month</th>
              <th>Total</th>
              <th>Tax</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map(row => (
              <tr key={row.year + "-" + row.month + "_row"}>
                <td key={row.year + "-" + row.month + "_month"}>
                  {row.year +
                    "-" +
                    (row.month.toString().length === 1 ? "0" : "") +
                    row.month}
                </td>
                <td key={row.year + "-" + row.month + "_total"}>
                  {row.total.toFixed(2)}
                </td>
                <td key={row.year + "-" + row.month + "_tax"}>
                  {row.tax.toFixed(2)}
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
  data: state.income
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getIncome: getIncome
    },
    dispatch
  );
}

const IncomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Income);

export default IncomeContainer;
