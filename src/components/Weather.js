import React, { Component } from 'react'

    class Weather extends Component {
        render(){
            // const array = Object.entries(this.props.displayWeather);
            return(
                <section>
                    {this.props.weatherList.map((item) => {
                                    return(
                                    <div key={item.key}>
                                        <p>{item.city} {item.country}</p>
                                        <p>{item.temp}</p>
                                        <p>{item.description}</p>
                                    </div>
                                    )
                                })}
                </section>
            ) 
        }
    }
export default Weather