import React, { Component } from 'react';
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
      // id:'',
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
      console.log(res)
      this.setState({
        city: res.data.name,
        country: res.data.sys.country,
        temp: Math.floor(res.data.main.temp),
        description: res.data.weather[0].description,
      });
      // console.log(this.state)
    })
  }

  render() {
    console.log('render was called')
    return (
      <div className="App">
        <Title />
        <Form getWeather={this.getWeather}  />
        <Weather city={this.state.city} country={this.state.country} temp={this.state.temp} 
                  description={this.state.description}/>
      </div>
    );
  }
}

export default App;
