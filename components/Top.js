import React, { Component } from 'react'
import { Text, View ,Image} from 'react-native'



const Top = () => {
    return (
      <View style={{width:'100%',position:"absolute",top:0}}>
        <Image source={require('../assets/Vector2.png')} style={{width:'100%'}} alt='img' />
        <View style={{width:"100%",display:"flex",alignItems:"flex-end"}}>
        <Image source={require('../assets/Ellipse28.png')} style={{marginRight:"30%"}} alt='img' />
        </View>
      </View>
    )
  }


export default Top
