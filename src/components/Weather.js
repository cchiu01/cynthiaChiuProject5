import React, { Component } from 'react'

    class Weather extends Component {
        render(){
            return(
                <section className="weather-listing">
                    <h2>Weather Listing by City</h2>
                    <div className="weather-listing-container">
                        {this.props.weatherList.map((item) => {
                                        return(
                                        <div className="city-weather-tile" key={item.key}>
                                            <div className="weather-tile-container">
                                                <h2>{item.city}, {item.country}</h2>
                                                <button onClick={() => {
                                                    this.props.deleteFromDatabase(item.firebaseKey)
                                                    }}><i class="fas fa-times"></i></button>
                                            </div>
                                            <h3 className="temp">{item.temp}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                        )
                                    })}
                    </div>
                </section>
            ) 
        }
    }
export default Weather