import React, { Component } from "react";
import getWeather from "../services/api-helpers";
import DisplayWeather from "./DisplayWeather";

class ZipForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            type="text"
            value={this.props.value}
            onChange={this.props.onChange}
            placeholder="Zipcode"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ZipForm;
