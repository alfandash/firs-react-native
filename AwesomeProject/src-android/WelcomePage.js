import React from 'react'
import { Button } from 'react-native'


const WelcomePage = props => {
  // debugger
  console.log('props',props.navigation)
  return (
    <Button title='Masuk' onPress={() => props.navigation.navigate('MainScreen')} />
  )
}

export default WelcomePage