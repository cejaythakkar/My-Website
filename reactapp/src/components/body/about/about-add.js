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
    toDate:null
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
          <div className="date-picker-container">
            <label for="from-date" >From:</label>
            <DatePicker
              name="from-date"
              dateFormat="yyyy/MM"
              selected={this.state.startDate}
              onChange={this.handleChange}
              showMonthYearPicker
            />
          </div>
          <div className="date-picker-container">
          <label for="from-date" >To:</label>
            <DatePicker
              name="to-date"
              dateFormat="yyyy/MM"
              selected={this.state.startDate}
              onChange={this.handleChange}
              showMonthYearPicker
            />
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
          <button type="button" className="btn" onClick={this.formSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
