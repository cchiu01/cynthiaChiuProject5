import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

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
      city:'',
      country:'',
      temp: undefined,
      description: '',
      error: ''
    };
  }

  // componentDidMount(){
  //   console.log('component did mount was called');
  // }

  getWeather = (city,country) => {
    axios.get(url, {
      params: {
        q: `${city},${country}`,
        APPID: apiKey,
        units: units
      }
    }).then((res) => {
      // console.log(res.data);
      // console.log(Math.floor(res.data.main.temp));
      this.setState({
        temp: Math.floor(res.data.main.temp)
      })
      console.log(this.state);
    })
  }

  render() {
    console.log('render was called')
    return (
      <div className="App">
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
