import React from 'react';

class Weather extends React.Component {
    render(){
        return(
            <div>
    <p>temp :{this.props.temp}</p>
    <p>weather :{this.props.weather}</p>
    <p>WeaterPick :<img alt='wer' src={`http://openweathermap.org/img/wn/${this.props.WeaterPick}@2x.png`}></img></p>
    <p>city :{this.props.city}</p>
    <p>country :{this.props.country}</p>
    <p>wind :{this.props.wind}</p>
    <p>humidity :{this.props.humidity}</p>
            </div>
        );
    }
}

export default Weather;