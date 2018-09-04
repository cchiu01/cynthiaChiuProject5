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
                    <div className="input-container">
                        <input className="form-input" onChange={this.handleChange} type="text" id="city"  required value={this.state.city}/>
                        <label htmlFor="City">City</label>
                    </div>
                    <div className="input-container">
                        <input className="form-input" onChange={this.handleChange} type="text" id="country" required value={this.state.country}/>
                        <label htmlFor="Country">Country</label>
                    </div>
                    <button>Get weather</button>
                </form>
            </div>
        )
}
}


export default Form
