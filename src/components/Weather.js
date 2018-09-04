import React, { Component } from 'react'

    class Weather extends Component {
        render(){
            return(
                <section>
                    {this.props.weatherList.map((item) => {
                                    return(
                                    <div className="city-weather-tile" key={item.key}>
                                        <p>{item.city} {item.country}</p>
                                        <p>{item.temp}</p>
                                        <p>{item.description}</p>
                                        <button onClick={() => {
                                            this.props.deleteFromDatabase(item.firebaseKey)
                                            }}><i class="fas fa-times"></i></button>
                                    </div>
                                    )
                                })}
                </section>
            ) 
        }
    }
export default Weather