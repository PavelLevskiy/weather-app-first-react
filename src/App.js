import React from 'react';
import Info from './components/info';
import Form from './components/form'
import Weather from './components/Weather'



const key = "edbb7402baf933e4825bc90b5a7bf384";
  






class App extends React.Component {

  state = {

    temp:undefined,
    weather:undefined,
    WeaterPick:undefined,
    city:undefined,
    country:undefined,
    wind:undefined,
    humidity:undefined,
    error:""

  }

  getWeather = async (e) => {

    e.preventDefault();

    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;

    let api = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}&units=metric`;
    let api_url = await fetch(api);
    let data = await api_url.json();

    this.setState({

      temp:data.main.temp,
      weather:data.weather[0].description,
      WeaterPick:data.weather[0].icon,
      city:data.name,
      country:data.sys.country,
      wind:data.wind.speed,
      humidity:data.main.humidity,
      error:""

    });

    console.log(data);
}


    render(){

      return (
        <div className='wrapper'>
        
          <Info/>
          <Form weatherMethod = {this.getWeather}/>
          <Weather  

              temp = {this.state.temp}
              weather = {this.state.weather}
              WeaterPick = {this.state.WeaterPick}
              city = {this.state.city}
              country = {this.state.country}
              wind = {this.state.wind}
              humidity = {this.state.humidity}
          />
        </div>
      );
    }

} 

export default App;