import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'
import { colors } from '../utils'

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors

export default function WeatherInfo({currentWeather}) {
    const {main : {temp},
    weather: [details],
    name,
} = currentWeather
const {icon,main, description} = details

const iconUrl =`https://openweathermap.org/img/wn/${icon}@4x.png`
  return (
    <View style={styles.WeatherInfo}>
    <Text>{name}</Text>
        <Image style={styles.weatherIcon} source={{uri: iconUrl}}></Image>
      <Text style={styles.textPrimary}>{temp}°</Text>
      <Text style={styles.weatherDescription}>{description}</Text>
      <Text>{main}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    WeatherInfo:{
        alignItems: 'center',
    },
    weatherIcon:{
        width:100,   
        height:100
    },
    weatherDescription: {
        textTransform: 'capitalize',
    },
    textPrimary:{
        fontSize: 40,
        color:PRIMARY_COLOR
    }
    
})