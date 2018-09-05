import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import Map from '../components/map';
import weather_reducer from '../reducers/weather_reducer';


class WeatherList extends Component {
    renderWeatherList(cityData) {
        const name = cityData.city.name;
        const temperatures = cityData.list.map((temp) => temp.main.temp);
        const pressures = cityData.list.map((temp) => temp.main.pressure)
        const humidities = cityData.list.map((temp) => temp.main.humidity)
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={name}>
                <td>
                    <Map lon={lon} lat={lat} />
                </td>
                <td>
                    <Chart data={temperatures} color={"blue"} unit="K" />
                </td>
                <td>
                    <Chart data={pressures} color={"orange"} unit="hPa" />
                </td>
                <td>
                    <Chart data={humidities} color={"red"} unit="%" />
                </td>
            </tr>
        )
    }
    render() {
        const { weather } = this.props;
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {weather.map(this.renderWeatherList)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return { 
        weather: weather.cidades,
    }
}

export default connect(mapStateToProps)(WeatherList);
