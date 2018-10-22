import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBillsPerTenant, getPaymentsPerTenant } from "./../actions/actions";
import Bills from "./Bills";
import Payments from "./Payments";

export class Tenants extends Component {
  componentDidMount() {
    this.props.getBillsPerTenant(this.props.match.params.id);
    this.props.getPaymentsPerTenant(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.id !== this.props.match.params.id) {
      this.props.getBillsPerTenant(newProps.match.params.id);
      this.props.getPaymentsPerTenant(newProps.match.params.id);
    }
  }

  render() {
    return (
      <div className="container mt-3">
        <div>
          <h3
            className={
              "alert " +
              (this.getBalance() < 0 ? "alert-primary" : "alert-success")
            }
          >
            Balans: {this.getBalance()} zł
          </h3>
        </div>
        <div className="row">
          <div className="col-9">
            <Bills />
          </div>
          <div className="col-3">
            <Payments />
          </div>
        </div>
      </div>
    );
  }

  getBalance() {
    const bills = this.props.bills.reduce(function(prev, cur) {
      return prev + cur.price;
    }, 0);

    const payments = this.props.payments.reduce(function(prev, cur) {
      return prev + cur.amount;
    }, 0);

    return Number(payments - bills).toFixed(2);
  }
}

const mapStateToProps = (state, ownProps) => ({
  bills: state.bills,
  payments: state.payments
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getBillsPerTenant: getBillsPerTenant,
      getPaymentsPerTenant: getPaymentsPerTenant
    },
    dispatch
  );
}

const TenantsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tenants);

export default TenantsContainer;
