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
            <h1> {zipCodeData.main.temp}</h1>
            <div>
              <h2>{zipCodeData.name} Temperature</h2>
            </div>
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
              {zipCodeData.weather[0].main}
              <div className="image">
                <img
                  src={`http://openweathermap.org/img/w/${
                    zipCodeData.weather[0].icon
                  }.png`}
                />
              </div>
              <div>{zipCodeData.weather[0].description}</div>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default DisplayWeather;
