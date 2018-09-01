import React, { Component } from 'react';
import axios from 'axios';
import firebase from './firebase'


// COMPONENTS //
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'


const url = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = '224a83bd377a26022f42bccef516e3cd';
const units = 'metric';


class App extends Component {

  constructor(){
    super();
    this.state = {
        cityList:[]
    }
  }

  getWeather = (city,country) => {
    axios.get(url, {
      params: {
        q: `${city},${country}`,
        APPID: apiKey,
        units: units
      }
    }).then((res) => {
      // console.log(res)
      const cities=Array.from(this.state.cityList);
      cities.push(
        {key: res.data.id,
        city: res.data.name,
        country: res.data.sys.country,
        temp: Math.floor(res.data.main.temp),
        description: res.data.weather[0].description,});
      this.setState({cityList : cities}) 
    })
  }

  componentDidMount(){
    const weatherRef = firebase.database().ref();
    // weatherRef.on('value', (snapshot) => {})
    console.log('weatherRef')
  }

  render() {
    console.log('render was called')
    return (
      <div className="App">
        <Title />
        <Form getWeather={this.getWeather}  />
        <Weather weatherList={this.state.cityList} />
      </div>
    );
  }
}

export default App;
