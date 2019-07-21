import React from 'react';

class Form extends React.Component {
    render(){
        return(
            <form onSubmit={this.props.weatherMethod}>
               <input type='text' name ='city' placeholder='city'/>
               <input type='text' name ='country' placeholder='country'/>
               <button>Submit</button>
            </form>
        );
    }
}

export default Form;