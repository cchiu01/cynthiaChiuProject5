import React, { Component } from 'react'

    class Weather extends Component {
        render(){
            return(
                <section>
                    {this.props.weatherList.map((item) => {
                                    return(
                                    <div key={item.key}>
                                        <p>{item.city} {item.country}</p>
                                        <p>{item.temp}</p>
                                        <p>{item.description}</p>
                                        <button onClick={() => {
                                            this.props.deleteFromDatabase(item.firebaseKey)
                                        }}>delete</button>
                                    </div>
                                    )
                                })}
                </section>
            ) 
        }
    }
export default Weather