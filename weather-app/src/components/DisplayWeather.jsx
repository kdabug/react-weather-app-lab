import React, { Component } from "react";

class DisplayWeather extends Component {
  constructor() {
    super();
    // console.log("zipCodeData > displayWeather: ", this.props);
  }

  render() {
    console.log("zipCodeData > displayWeather: ", this.props);
    const { zipCodeData } = this.props;
    // console.log("zipCodeData: ", zipCodeData);
    return (
      zipCodeData !== null && (
        <div>
          <div>
            {zipCodeData.main.temp}
            <div>{zipCodeData.name} Temperature</div>
          </div>
          <div className="min-max-temps">
            <div className="min-temp">
              {zipCodeData.main.temp_min}
              <div>Min Temp</div>
            </div>
            <div className="max-temp">
              {zipCodeData.main.temp_max}
              <div>Max Temp</div>
            </div>
          </div>
          <div className="humidity-pressure-data">
            <div className="humidity">
              {zipCodeData.main.humidity}
              <div>Humidity</div>
            </div>
            <div className="pressure">
              {zipCodeData.main.pressure}
              <div>Air Pressure</div>
            </div>
          </div>
          <div className="weather-type">
            <div className="description">
              {zipCodeData.weather[0].main} -
              {zipCodeData.weather[0].description}
              <div>Weather Type</div>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default DisplayWeather;
