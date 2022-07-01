import {View, StyleSheet,Platform } from 'react-native'
import React from 'react'
import {Picker} from '@react-native-community/picker'

export default function UnitsPicker() {
  return (
    <View>
        <Picker>
            <Picker.Item label="C°" value="metric" />
            <Picker.Item label="F°" value="imperial" />
        </Picker>
    </View>
  )
}