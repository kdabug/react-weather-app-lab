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
            <div>Temperature</div>
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
        </div>
      )
    );
  }
}

export default DisplayWeather;
