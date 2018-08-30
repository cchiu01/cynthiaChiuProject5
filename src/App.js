import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

// COMPONENTS //
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'


const url = 'api.openweathermap.org/data/2.5/weather';
const city = 'Toronto,ca'
const apiKey = '224a83bd377a26022f42bccef516e3cd';
const units = 'metric';


class App extends Component {

  componentDidMount(){
    console.log('component did mount was called');

    // axios.get(url, {
    //   params: {
    //     q: city,
    //     APPID: apiKey,
    //     units: units
    //   }
    // }).then((res) => {
    //   console.log(res)
    // })

  }

  

  render() {
    console.log('render was called')
    return (
      <div className="App">
        <Title />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
