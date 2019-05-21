import * as React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default class Add extends React.Component {
  state = {
    title: "",
    subtitle: "",
    place: "",
    description: "",
    showFromCalendar: false,
    startDate: null,
    toDate: null
  };

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  showFromCalendar = event => {
    this.setState({
      showFromCalendar: true
    });
  };
  render() {
    return (
      <div className="add-about-wrapper p-5">
        <form className="add-about-form form-group">
          <input
            type="text"
            name="title"
            value={this.state.title}
            className="form-control"
            onChange={this.onChangeHandler}
            placeholder="Enter the Title..."
          />
          <input
            type="text"
            name="subtitle"
            value={this.state.subtitle}
            className="form-control"
            onChange={this.onChangeHandler}
            placeholder="Enter the Subtitle..."
          />
          <div className="date-picker-wrapper row py-3 m-0">
            <div className="date-picker-container col-6 w-100">
              <DatePicker
                className="form-control w-100"
                name="from-date"
                dateFormat="yyyy/MM"
                selected={this.state.startDate}
                onChange={this.handleChange}
                showMonthYearPicker
                placeholderText="From Period"
              />
            </div>
            <div className="date-picker-container col-6 w-100">
              <DatePicker
                className="form-control w-100"
                name="to-date"
                dateFormat="yyyy/MM"
                selected={this.state.startDate}
                onChange={this.handleChange}
                showMonthYearPicker
                placeholderText="To Period"
              />
            </div>
          </div>
          <input
            type="text"
            name="place"
            value={this.state.place}
            className="form-control"
            onChange={this.onChangeHandler}
            placeholder="Enter the place..."
          />
          <textarea
            name="description"
            value={this.state.description}
            className="form-control"
            onChange={this.onChangeHandler}
            placeholder="Enter the description..."
          />
          <div className="submit-button-container text-right py-4">
            <button type="button" className="btn" onClick={this.formSubmit}>
              Submit
          </button>
          </div>
        </form>
      </div>
    );
  }
}
