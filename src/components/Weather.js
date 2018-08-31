import React, { Component } from 'react'

    class Weather extends Component {
        render(){
            // const array = Object.entries(this.props.displayWeather);
            // console.log(array);
            return(
                <div>
                    <p>{this.props.city}, {this.props.country}</p>
                    <p>{this.props.temp}</p>
                    <p>{this.props.description}</p>
                </div>
            )
        }
    }
export default Weather