import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { API_KEY } from './../utils/const';

import Layout from './../UI/Layout';

class App extends React.Component {

  constructor(props) {
     super(props)
     this.state = {
      isLoading: true,
      temperature: 0,
      weatherCondition: null,
      humidity: null,
      city: null,
      wind: null,
      error: null
     }
  }

  componentDidMount() {
    //get the correct location
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Error Gettig Weather Condtions'
        });
      }
    );
  }

  //Fetching the weather information
  fetchWeather(lat = 25, lon = 25) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          temperature: json.main.temp,
          weatherCondition: json.weather[0].main,
          wind: json.wind.speed,
          humidity: json.main.humidity,
          city: json.name,
          isLoading: false
        });
      }).catch((err)=>{
        this.setState({error: "some unknow error occured, please check internet connection"})
      });
  }

  render() {
    const { isLoading, weatherCondition, temperature, humidity, wind, city, error } = this.state;
    const loadedui = isLoading ? <Text>Fetching The Weather</Text> : <Layout weather={weatherCondition} temperature={temperature} humidity={humidity} wind={wind} city={city} />;
    return (
      <View style={styles.container}>
        {error != null ? <Text>{ error }</Text>:loadedui}
      </View>
    );
  }

}

//CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});


export default App;

