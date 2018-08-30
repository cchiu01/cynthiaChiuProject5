import React, { Component } from 'react'

class Form extends Component {

    handleSubmit= (e) => {
        e.preventDefault();
        console.log('handle submit called');
        // call getWeather  
        this.props.getWeather();    
    }



    render (){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="City">THIS IS MY CITY LABEL</label>
                    <input type="text" id="City" placeholder='Try "Toronto"'/>
                    <label htmlFor="Country">Country label</label>
                    <input type="text" id="Country" placeholder='Try "CA"'/>
                    <button>Get weather</button>
                </form>
            </div>
        )
}
}


export default Form
