import React, { Component } from 'react'

class Form extends Component {

    constructor(){
        super();
        this.state = {
            city: '',
            country: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // call getWeather  
        this.props.getWeather(this.state.city, this.state.country);
        
        this.setState({
            city:'',
            country:''
        }) 
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        }
        )
    }

    render (){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="City">City</label>
                    <input onChange={this.handleChange} type="text" id="city" placeholder='Try "toronto"' value={this.state.city}/>
                    <label htmlFor="Country">Country</label>
                    <input onChange={this.handleChange} type="text" id="country" placeholder='Try "ca"' value={this.state.country}/>
                    <button>Get weather</button>
                </form>
            </div>
        )
}
}


export default Form
