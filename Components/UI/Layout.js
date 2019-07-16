import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/dist/Ionicons';

import { weatherConditions } from '../utils/WeatherConditions';

class Layout extends Component {

    constructor(props){
        super(props);
    }

    render(){
        const { temperature, weather, wind, humidity, city } = this.props;
        return (
          <View
          style={[
            styles.weatherContainer,
            { backgroundColor: weatherConditions[weather].color }
          ]}
        >
          <View style={styles.headerContainer}>
            <Icon
              size={72}
              name={weatherConditions[weather].icon}
              color={'#fff'}
            />
            <Text style={styles.tempText}>{temperature}˚</Text>
            <Text style={styles.tempText}>{city}</Text>
          </View>
          <View style={[{flex: 0.18, flexDirection: "row", justifyContent: "space-between", alignSelf: "center"}]}>
            <Text style={styles.subinfo}>Wind: {wind} Km/h</Text>
            <Text style={styles.subinfo}>Humidity: {humidity}%</Text>
          </View>
          <View style={styles.bodyContainer}>
            <Text style={styles.title}>{weatherConditions[weather].title}</Text>
            <Text style={styles.subtitle}>
              {weatherConditions[weather].subtitle}
            </Text>
          </View>
        </View>
        )
    }

}

const styles = StyleSheet.create({
    weatherContainer: {
        flex: 1,
        backgroundColor: '#f7b733',
        width: "100%"
      },
      headerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      tempText: {
        fontSize: 48,
        color: '#fff'
      },
      bodyContainer: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 40
      },
      title: {
        fontSize: 48,
        color: '#fff'
      },
      subtitle: {
        fontSize: 24,
        color: '#fff'
      },
      subinfo: {
        fontSize: 15,
        color: "#fff",
        margin: 5,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 6,
        fontWeight: "bold",
        elevation: 3,
        backgroundColor: "#79abfc"
      }
})

export default Layout;