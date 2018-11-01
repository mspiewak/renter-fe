import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { postBill } from "./../actions/actions";

import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

export class NewBill extends Component {
  constructor(props) {
    super(props);

    let lastMonthDate = new Date();
    lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);

    this.state = {
      bill: {
        total_price: 0,
        due_date: moment(),
        period_start: moment().subtract(1, "month"),
        period_end: moment(),
        url: "",
        type: 2
      },
      sent: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.id;

    if (["type", "total_price"].indexOf(name) && value) {
      value = parseFloat(value);
    }
    this.setState({
      bill: Object.assign({}, this.state.bill, {
        [name]: value
      })
    });
  }

  handleDateChange = id => (moment, event) => {
    this.setState({
      bill: Object.assign({}, this.state.bill, {
        [id]: moment
      })
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    let data = Object.assign({}, this.state.bill);
    data.type = { id: data.type };

    data.due_date = data.due_date.format();
    data.period_start = data.period_start.format();
    data.period_end = data.period_end.format();

    this.props.postBill(data);
    this.setState({
      sent: true
    });
  }

  render() {
    const el = !this.state.sent
      ? this.renderForm.bind(this)
      : this.renderConfirmation;
    return <div className="container mt-3">{el()}</div>;
  }

  renderConfirmation() {
    return <h3>Bill has been created</h3>;
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <label htmlFor="type" className="col-sm-2 col-form-label">
            Type:
          </label>
          <select
            className="form-control col-sm-10"
            id="type"
            value={this.state.bill.type}
            onChange={this.handleInputChange}
          >
            <option value="1">Rent</option>
            <option value="2">Gas</option>
            <option value="3">Electricity</option>
            <option value="4">Water</option>
          </select>
        </div>
        <div className="form-group row">
          <label htmlFor="amount" className="col-sm-2 col-form-label">
            Amount:
          </label>
          <input
            type="number"
            className="form-control col-sm-10"
            id="total_price"
            value={this.state.bill.total_price}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group row">
          <label htmlFor="url" className="col-sm-2 col-form-label">
            URL
          </label>
          <input
            type="text"
            className="form-control col-sm-10"
            id="url"
            value={this.state.bill.url}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group row">
          <label htmlFor="due_date" className="col-sm-2 col-form-label">
            Due Date
          </label>
          <DatePicker
            selected={this.state.bill.due_date}
            onChange={this.handleDateChange("due_date")}
            dateFormat="DD-MM-YYYY"
          />
        </div>
        <div className="form-group row">
          <label htmlFor="period_start" className="col-sm-2 col-form-label">
            Period Start
          </label>
          <DatePicker
            selected={this.state.bill.period_start}
            onChange={this.handleDateChange("period_start")}
            dateFormat="DD-MM-YYYY"
          />
        </div>
        <div className="form-group row">
          <label htmlFor="period_end" className="col-sm-2 col-form-label">
            Period End
          </label>
          <DatePicker
            selected={this.state.bill.period_end}
            onChange={this.handleDateChange("period_end")}
            dateFormat="DD-MM-YYYY"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      postBill: postBill
    },
    dispatch
  );
}

const NewBillContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewBill);

export default NewBillContainer;
