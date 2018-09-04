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

const weatherRef = firebase.database().ref();

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
      const cities=Array.from(this.state.cityList);
      const cityObject = {
        key: res.data.id,
        city: res.data.name,
        country: res.data.sys.country,
        temp: Math.floor(res.data.main.temp),
        description: res.data.weather[0].description,
      }
      cities.push(cityObject);
      this.setState({cityList : cities}) 
      this.addToDatabase(cityObject);
    })
  }

  addToDatabase = (cityObject) => {
    weatherRef.push(cityObject);
  }

  deleteFromDatabase = (firebaseKey) => {
    console.log(firebaseKey);
    const cityDbRef = firebase.database().ref(`/${firebaseKey}`);
    cityDbRef.remove();
    // remove from firebase
    // if successful, update state
  }

  componentDidMount(){
    
    console.log('component did mount');
    weatherRef.on('value', (snapshot) => {
      let cityArray = Object.entries(snapshot.val()).map((item) => {
        return({
          firebaseKey: item[0],
          key: item[1].key,
          city:item[1].city,
          country: item[1].country, 
          temp: item[1].temp,
          description: item[1].description
        })

      })
      this.setState({
        cityList: cityArray
      }
      )
    })
    
  }

  render() {
    console.log('render was called')
    return (
      <div className="App body">
          <header>
              <Title /> 
          </header>
          <main>
            <div className="wrapper">
              <Form getWeather={this.getWeather}  />
              <Weather weatherList={this.state.cityList} deleteFromDatabase={this.deleteFromDatabase}/>
            </div>
          </main>
          <footer>
          <div className="wrapper">© 2018 Cynthia Chiu</div>
          </footer>
      
      </div>
    );
  }
}

export default App;
