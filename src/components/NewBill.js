import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getFormattedDate, postBill } from "./../actions/actions";

export class NewBill extends Component {
  constructor(props) {
    super(props);

    let lastMonthDate = new Date();
    lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);

    this.state = {
      bill: {
        total_price: 0,
        due_date: getFormattedDate(new Date()),
        period_start: getFormattedDate(lastMonthDate),
        period_end: getFormattedDate(new Date()),
        url: "",
        type: 2
      },
      sent: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();
    let data = Object.assign({}, this.state.bill);
    data.type = { id: data.type };
    data.due_date = new Date(data.due_date).toISOString();
    data.period_start = new Date(data.period_start).toISOString();
    data.period_end = new Date(data.period_end).toISOString();

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
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select
            className="form-control"
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
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control"
            id="total_price"
            value={this.state.bill.total_price}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="due_date">Due Date</label>
          <input
            type="date"
            className="form-control"
            id="due_date"
            value={this.state.bill.due_date}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="period_start">Period Start</label>
          <input
            type="date"
            className="form-control"
            id="period_start"
            value={this.state.bill.period_start}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="period_end">Period End</label>
          <input
            type="date"
            className="form-control"
            id="period_end"
            value={this.state.bill.period_end}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="url">URL</label>
          <input
            type="text"
            className="form-control"
            id="url"
            value={this.state.bill.url}
            onChange={this.handleInputChange}
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
