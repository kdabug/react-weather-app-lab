import React, { Component } from "react";
import ZipForm from "./components/ZipForm";
import "./App.css";
import getWeather from "./services/api-helpers";
import DisplayWeather from "./components/DisplayWeather";

class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchWeather = this.fetchWeather.bind(this);
    this.state = {
      zipCode: "",
      zipCodeData: null
    };
  }

  async fetchWeather() {
    try {
      const weather = await getWeather(this.state.zipCode);
      console.log(`fetchWeather > weather: ${weather}`);
      this.setState({
        zipCodeData: weather.data
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ zipCode: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.zipcCode);
    this.fetchWeather();
  }

  render() {
    console.log("this.state.zipCodeData > app: ", this.state.zipCodeData);
    return (
      <div className="App">
        <h1>Hello, react</h1>
        <ZipForm
          value={this.state.zipCode}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <DisplayWeather zipCodeData={this.state.zipCodeData} />
      </div>
    );
  }
}

export default App;
